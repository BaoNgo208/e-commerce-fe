import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default HomeRoutes;
