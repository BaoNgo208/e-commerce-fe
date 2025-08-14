import { useLocation, useParams } from "react-router-dom";
import Overview from "../../components/ProductDetail/Overview/Overview.tsx";
import Description from "../../components/ProductDetail/Description/Description.tsx";
import RelatedProducts from "../../components/ProductDetail/RelatedProducts.tsx/RelatedProducts.tsx";
import MainLayout from "../../layouts/MainLayout.tsx";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const stateProduct = location.state;
  const [product, setProduct] = useState<any>(stateProduct || null);

  return (
    <MainLayout>
      <div className="w-full min-h-screen px-20 py-5">
        <div className="w-full h-full mb-20">
          <Overview product={product}></Overview>
        </div>
        <div>
          <Description description={product.product_description}></Description>
        </div>
        <RelatedProducts></RelatedProducts>
        <div></div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
