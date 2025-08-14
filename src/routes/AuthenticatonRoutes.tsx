import { Routes, Route } from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication.tsx";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<Authentication />}></Route>
    </Routes>
  );
};

export default AuthenticationRoutes;
