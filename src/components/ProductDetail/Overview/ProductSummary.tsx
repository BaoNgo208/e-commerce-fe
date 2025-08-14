import Rating from "./Rating.tsx";

const ProductSummary = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{product.product_name}</h1>
        <Rating value={4.5}></Rating>

        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-2xl font-semibold">{product.regular_price}</h1>
          <h1 className="text-2xl font-extralight line-through text-gray-400">
            {product.discount_price}
          </h1>
          <h1 className="text-sm text-red-500 bg-red-100 font-medium px-3 py-1 rounded-full">
            -30%
          </h1>
        </div>

        <p className="text-md font-extralight">{product.short_description}</p>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex items-center gap-4 w-full mt-auto">
        <div className="flex items-center justify-between bg-gray-100 px-6 py-2 rounded-full w-50">
          <button className="text-lg font-light text-gray-800 hover:text-black">
            −
          </button>
          <span className="text-sm">{1}</span>
          <button className="text-lg font-light text-gray-800 hover:text-black">
            +
          </button>
        </div>

        <button className="basis-3/5 w-full bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSummary;
