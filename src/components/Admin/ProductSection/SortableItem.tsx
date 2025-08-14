import { useSortable } from "@dnd-kit/sortable";
import { useState } from "react";
import ExpandedItem from "./ExpandedItem.tsx";
import type { ProductSection } from "../../../types/ProductSection.ts";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const SortableItem: React.FC<{
  item: ProductSection;
}> = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const [expanded, setExpanded] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [editingStatus, setEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState(item.is_active);

  const handleDoubleClick = (field: any, value: any) => {
    setEditingField(field);
    setEditedValue(value);
  };
  const handleStatusDoubleClick = () => {
    setEditingStatus(true);
    setNewStatus(item.is_active);
  };

  const handleBlur = () => {
    if (editingField) {
      setEditingField(null);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: expanded ? 0 : "8px",
    padding: "12px",
    backgroundColor: isDragging ? "#e0f7ff" : "white",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "grab",
    boxShadow: isDragging ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="grid grid-cols-[5%_25%_40%_15%_15%] w-full text-left divide-x divide-gray-300 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
      >
        <div
          className="p-2 flex justify-center items-center cursor-grab text-gray-500"
          {...attributes}
          {...listeners}
        >
          ☰
        </div>

        <div
          className="p-2 font-bold cursor-pointer"
          onDoubleClick={() => handleDoubleClick("title", item.title)}
        >
          {editingField === "title" ? (
            <input
              autoFocus
              className="border rounded px-1 py-0.5 w-full"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            item.title
          )}
        </div>

        <div
          className="p-2 text-gray-700 truncate cursor-pointer"
          onDoubleClick={() =>
            handleDoubleClick("description", item.description)
          }
        >
          {editingField === "description" ? (
            <input
              autoFocus
              className="border rounded px-1 py-0.5 w-full"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            item.description
          )}
        </div>

        <div
          className={`p-2 font-medium ${
            item.is_active ? "text-green-600" : "text-red-600"
          } cursor-pointer`}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={handleStatusDoubleClick}
        >
          {editingStatus ? (
            <div className="relative z-10">
              <div
                className={`p-1 cursor-pointer border rounded ${
                  newStatus ? "text-green-600" : "text-red-600"
                }`}
              >
                {newStatus ? "Active" : "Inactive"}
              </div>
              <div className="absolute left-0 mt-1 bg-white rounded shadow">
                <div
                  onClick={() => {
                    setNewStatus(true);
                    setEditingStatus(false);
                    console.log("Update to Active");
                  }}
                  className="px-3 py-1 hover:bg-gray-100 text-green-600 cursor-pointer"
                >
                  Active
                </div>
                <div
                  onClick={() => {
                    setNewStatus(false);
                    setEditingStatus(false);
                    console.log("Update to Inactive");
                  }}
                  className="px-3 py-1 hover:bg-gray-100 text-red-600 cursor-pointer"
                >
                  Inactive
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`p-2 font-medium ${
                item.is_active ? "text-green-600" : "text-red-600"
              } cursor-pointer`}
              onDoubleClick={handleStatusDoubleClick}
            >
              {item.is_active ? "Active" : "Inactive"}
            </div>
          )}
        </div>

        <div
          className="p-2 cursor-pointer text-blue-600 hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
        >
          {item.product_section_products.length} sản phẩm
        </div>
      </div>

      {expanded && <ExpandedItem item={item} />}
    </>
  );
};

export default SortableItem;
