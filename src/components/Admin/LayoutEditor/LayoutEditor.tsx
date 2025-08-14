import { useState, useMemo } from "react";
import { Responsive, WidthProvider, type Layouts } from "react-grid-layout";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem.tsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const LayoutEditor = () => {
  const [childrenMap, setChildrenMap] = useState<Record<string, string[]>>({
    "1": ["logo", "nav-links", "search-bar", "user-links"],
    "2": ["child-2"],
    "3": ["child-3"],
  });
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const getDynamicLayouts = useMemo(() => {
    const calcHeight = (parentId: string, cols: number) => {
      const baseHeight = 2; // ví dụ phần header
      const perRowHeight = 1; // mỗi row trong grid tính là 1 đơn vị
      const childPerRow = Math.floor(cols / 2); // nếu mỗi child chiếm 2 cột
      const rowsNeeded = Math.ceil(childrenMap[parentId].length / childPerRow);

      return baseHeight + rowsNeeded * perRowHeight;
    };

    const createLayout = (cols: number) =>
      Object.keys(childrenMap).map((parentId, index) => {
        const height = calcHeight(parentId, cols);
        return {
          i: parentId,
          x: 0,
          y: 0,
          w: cols,
          h: height,
          minW: cols,
          minH: height,
        };
      });

    return {
      lg: createLayout(12),
      md: createLayout(10),
      sm: createLayout(6),
    };
  }, [childrenMap]);

  const handleChildDragEnd = (parentId: string) => (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setChildrenMap((prev) => {
      const oldIndex = prev[parentId].indexOf(active.id);
      const newIndex = prev[parentId].indexOf(over.id);
      return {
        ...prev,
        [parentId]: arrayMove(prev[parentId], oldIndex, newIndex),
      };
    });
  };

  return (
    <ResponsiveGridLayout
      className="layout w-full h-full"
      layouts={getDynamicLayouts}
      compactType="vertical"
      isResizable={true}
      isDraggable={false}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
    >
      {Object.keys(childrenMap).map((parentId) => (
        <div key={parentId} className="bg-gray-200 p-2 rounded">
          <h3 className="font-bold mb-2">Parent {parentId}</h3>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleChildDragEnd(parentId)}
          >
            <SortableContext
              items={childrenMap[parentId]}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-row gap-2 w-full">
                {childrenMap[parentId].map((childId, index) => {
                  const basisClasses = [
                    "basis-[12.5%]",
                    "basis-[37.5%]",
                    "basis-[25%]",
                    "basis-[25%]",
                  ];

                  return (
                    <SortableItem
                      key={childId}
                      id={childId}
                      className={`bg-white p-2 border rounded text-center ${
                        parentId === "1" ? basisClasses[index] : ""
                      }`}
                    >
                      {childId}
                    </SortableItem>
                  );
                })}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutEditor;
