import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail/ProductDetail.tsx";

const ProductDetaiRoutes = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default ProductDetaiRoutes;
