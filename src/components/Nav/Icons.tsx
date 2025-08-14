import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="/cart" aria-label="Cart">
        <FaShoppingCart size={18} />
      </a>
      <a href="/account" aria-label="Account">
        <FaUser size={18} />
      </a>
    </div>
  );
};
export default NavIcons;
