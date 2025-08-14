import Gallery from "./Gallery.tsx";
import ProductSummary from "./ProductSummary.tsx";

const Overview = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-row flex-1 ">
      <div className="basis-2/5 ">
        <Gallery />
      </div>
      <div className="basis-3/5 px-10 ">
        <ProductSummary product={product} />
      </div>
    </div>
  );
};

export default Overview;
