import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin.tsx";
import AdminLayout from "../layouts/AdminLayout.tsx";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />{" "}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
