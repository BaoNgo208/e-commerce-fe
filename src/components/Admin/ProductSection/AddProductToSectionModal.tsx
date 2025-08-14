import {
  addProductsToSection,
  getAllProductNotInSection,
} from "../../../apis/ProductApi.ts";
import { useEffect, useState } from "react";
import type { Product } from "../../../types/Product.ts";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { fetchSections } from "../../../stores/ProductSectionThunk.ts";
import type { AppDispatch } from "../../../stores/store.ts";

type Props = {
  selectedSectionId: UniqueIdentifier;
  onClose: () => void;
};

const AddProductToSectionModal = ({ onClose, selectedSectionId }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductIds, setSelectedProductIds] = useState<
    UniqueIdentifier[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();

  const toggleProductSelection = (productId: UniqueIdentifier) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddSelected = async () => {
    console.log("Thêm các sản phẩm:", selectedProductIds);

    await addProductsToSection(selectedSectionId, selectedProductIds);
    dispatch(fetchSections());
    onClose();
  };

  useEffect(() => {
    const fetchProductWithoutSection = async () => {
      const response = await getAllProductNotInSection(
        String(selectedSectionId)
      );
      setProducts(response.data);
    };
    fetchProductWithoutSection();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg max-w-[90vw] w-full p-6">
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-semibold">Thêm sản phẩm vào mục</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="mt-4 max-h-[70vh] overflow-y-auto">
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              <div className="grid grid-cols-[5%_20%_30%_10%_15%_20%] bg-gray-100 font-semibold items-stretch text-sm text-gray-700 border-b">
                <div className="p-2 border-r text-center">Chọn</div>
                <div className="p-2 border-r">Tên</div>
                <div className="p-2 border-r">Mô tả</div>
                <div className="p-2 border-r">SL</div>
                <div className="p-2 border-r">Giá gốc</div>
                <div className="p-2">Giá khuyến mãi</div>
              </div>

              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-[5%_20%_30%_10%_15%_20%] text-sm text-gray-800 border-b items-stretch"
                >
                  <div className="p-2 border-r text-center">
                    <input
                      type="checkbox"
                      checked={selectedProductIds.includes(product.id)}
                      onChange={() => toggleProductSelection(product.id)}
                    />
                  </div>
                  <div className="p-2 border-r truncate">
                    {product.product_name}
                  </div>
                  <div className="p-2 border-r truncate">
                    {product.product_description}
                  </div>
                  <div className="p-2 border-r">{product.quantity}</div>
                  <div className="p-2 border-r">{product.regular_price} đ</div>
                  <div className="p-2">
                    {product.discount_price || product.regular_price} đ
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Đóng
          </button>
          <button
            onClick={handleAddSelected}
            disabled={selectedProductIds.length === 0}
            className={`px-4 py-2 rounded text-white ${
              selectedProductIds.length === 0
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Thêm ({selectedProductIds.length}) sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductToSectionModal;
