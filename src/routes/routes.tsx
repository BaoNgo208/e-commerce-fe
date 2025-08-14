import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./HomeRoutes.tsx";
import AdminRoutes from "./AdminRoutes.tsx";
import ProductDetaiRoutes from "./ProductDetailRoutes.tsx";
import AuthenticationRoutes from "./AuthenticatonRoutes.tsx";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthenticationRoutes />
      <HomeRoutes />
      <AdminRoutes />
      <ProductDetaiRoutes />
    </BrowserRouter>
  );
}
