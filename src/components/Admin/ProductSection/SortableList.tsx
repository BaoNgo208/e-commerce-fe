import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem.tsx";
import { useDispatch, useSelector } from "react-redux";
import { setSections } from "../../../reducers/ProductSectionSlice.ts";
import type { RootState } from "../../../stores/store.ts";
import { fetchSections } from "../../../stores/ProductSectionThunk.ts";
import type { AppDispatch } from "../../../stores/store.ts";
import { reOrderProductSection } from "../../../apis/ProductSectionApi.ts";
import {
  setHideSaveButton,
  setShowSaveButton,
} from "../../../reducers/UiSlice.ts";

const SortableList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sections = useSelector(
    (state: RootState) => state.productSection.sections
  );
  const initialSecionts = useSelector(
    (state: RootState) => state.productSection.intialSections
  );
  const showSaveButton = useSelector(
    (state: RootState) => state.ui.showSaveButton
  );
  const isFirstRender = useRef(true);
  const [sectionPositions, setSectionPositions] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    dispatch(fetchSections());
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("sectionPositions:", sectionPositions);
    console.log("sections:", sections);
    dispatch(setShowSaveButton());
  }, [sectionPositions]);

  const sensors = useSensors(useSensor(PointerSensor));

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  const renderedSections = useMemo(() => {
    return sections.map((section) => (
      <SortableItem key={section.id} item={section} />
    ));
  }, [sections]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex(
        (section) => section.id === active.id
      );
      const newIndex = sections.findIndex((section) => section.id === over?.id);

      const newSections = arrayMove(sections, oldIndex, newIndex);
      dispatch(setSections(newSections));

      const updatedPositionMap: Record<string, number> = {};
      newSections.forEach((section, index) => {
        updatedPositionMap[section.title] = index;
      });
      setSectionPositions(updatedPositionMap);
    }
  };

  const resetProductSectionOrderChange = async () => {
    dispatch(setSections(initialSecionts));
    dispatch(setHideSaveButton());
  };

  const handleReOrderProductSections = async () => {
    const reOrderedSectionResponse = await reOrderProductSection(
      sectionPositions
    );
    dispatch(setSections(reOrderedSectionResponse.data));
    dispatch(setHideSaveButton());
  };

  return (
    <div className="p-2">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sectionIds}
          strategy={verticalListSortingStrategy}
        >
          {renderedSections}

          {showSaveButton && (
            <div className="flex justify-end">
              <button
                type="button"
                className="px-5 py-3 text-base font-medium  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-center me-2 mb-2"
                onClick={handleReOrderProductSections}
              >
                Lưu
              </button>

              <button
                type="button"
                className=" px-5 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  text-center me-2 mb-2"
                onClick={resetProductSectionOrderChange}
              >
                Hủy
              </button>
            </div>
          )}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SortableList;
