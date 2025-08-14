import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClick = (type: any) => {
    navigate(`/admin?openTab=${type}`);
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <button onClick={() => handleClick("dashboard")}>Dashboard</button>
      <button onClick={() => handleClick("layout")}>Layout</button>
      <button onClick={() => handleClick("Order")}>Order</button>
      <button onClick={() => handleClick("ProductSection")}>
        Product Section
      </button>
    </div>
  );
};

export default Sidebar;
