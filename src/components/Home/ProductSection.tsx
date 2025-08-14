import { useState, useMemo } from "react";
import type { ProductSectionProduct } from "../../types/ProductSection.ts";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title: string;
  products: any;
  itemsPerPage?: number;
}

const ProductSection = ({
  title,
  products,
  itemsPerPage = 4,
}: ProductSectionProps) => {
  const pages = useMemo(() => {
    const paginated: ProductSectionProduct[][] = [];
    for (let i = 0; i < products.length; i += itemsPerPage) {
      paginated.push(products.slice(i, i + itemsPerPage));
    }
    return paginated;
  }, [products, itemsPerPage]);

  const [currentPage, setCurrentPage] = useState(0);
  console.log("pages:", pages);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  return (
    <div className="my-8 w-full px-4 mb-20">
      <h2 className="text-2xl text-black text-center font-bold uppercase mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pages[currentPage]?.map((item) => (
          <Link
            key={item.product_id}
            to={`/product/${item.product_id}`}
            state={item.products}
            className="bg-white p-4 rounded-lg shadow text-black block hover:shadow-lg transition"
          >
            <img
              src="https://res.cloudinary.com/dlqmbuvb0/image/upload/v1750768658/fdf36b7d4af0c5eb997902c85d513b93_qgcwu9.jpg"
              alt={item.products.product_name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">
              {item.products.product_name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-black font-bold">
                ${item.products.regular_price}
              </span>
              {item.products.discount_price && (
                <span className="line-through text-gray-400 text-sm">
                  ${item.products.discount_price}
                </span>
              )}
            </div>
            <div className="text-yellow-500 text-sm">⭐ 5</div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
