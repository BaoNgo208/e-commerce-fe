import type { ProductSection } from "../../../types/ProductSection.ts";
import { useState } from "react";
import AddProductToSectionModal from "./AddProductToSectionModal.tsx";
import type { AppDispatch } from "../../../stores/store.ts";
import { useDispatch } from "react-redux";
import { fetchSections } from "../../../stores/ProductSectionThunk.ts";
import { deleteProductsFromSection } from "../../../apis/ProductApi.ts";
import type { UniqueIdentifier } from "@dnd-kit/core";

const ExpandedItem: React.FC<{ item: ProductSection }> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  console.log("item:", item);
  const handleDelelteProductsFromSection = async (
    selectedSectionId: UniqueIdentifier
  ) => {
    await deleteProductsFromSection(selectedSectionId, selectedProductIds);
    dispatch(fetchSections());
  };
  const [selectedProductIds, setSelectedProductIds] = useState<
    UniqueIdentifier[]
  >([]);

  const toggleProductSelection = (productId: UniqueIdentifier) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-gray-50 border-x border-b border-gray-300 mb-3">
      <div className="grid grid-cols-[5%_20%_30%_10%_15%_20%] font-semibold text-sm text-gray-700 bg-gray-100 border-b border-gray-300">
        <div className="p-2 border-r text-center">
          <input type="checkbox" disabled />
        </div>
        <div className="p-2 border-r">Tên</div>
        <div className="p-2 border-r">Mô tả</div>
        <div className="p-2 border-r">SL</div>
        <div className="p-2 border-r">Giá gốc</div>
        <div className="p-2">Giá KM</div>
      </div>

      {item.product_section_products.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-[5%_20%_30%_10%_15%_20%] text-sm text-gray-800 border-b last:border-none"
        >
          <div className="p-2 border-r text-center">
            <input
              type="checkbox"
              checked={selectedProductIds.includes(product.products.id)}
              onChange={() => toggleProductSelection(product.products.id)}
            />
          </div>
          <div className="p-2 border-r truncate">
            {product.products.product_name}
          </div>
          <div className="p-2 border-r truncate">
            {product.products.product_description}
          </div>
          <div className="p-2 border-r">{product.products.quantity}</div>
          <div className="p-2 border-r">{product.products.regular_price} đ</div>
          <div className="p-2">
            {(product.products.discount_price ||
              product.products.regular_price) + " đ"}
          </div>
        </div>
      ))}
      <div className="text-right ">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded "
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Thêm vào mục
        </button>
        <button
          className="bg-red-600 hover:bg-red-400 text-white font-semibold py-2 px-2 rounded"
          onClick={() => handleDelelteProductsFromSection(item.id)}
        >
          Xóa khỏi mục
        </button>
      </div>
      {isModalOpen && (
        <AddProductToSectionModal
          selectedSectionId={item.id}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ExpandedItem;
