const MenuLinks = () => {
  return (
    <ul className="hidden md:flex gap-6 text-sm font-medium">
      <li className="flex items-center gap-1 cursor-pointer">
        Shop
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3 h-3 mt-[1px]"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </li>
      <li className="cursor-pointer">On Sale</li>
      <li className="cursor-pointer">New Arrivals</li>
      <li className="cursor-pointer">Brands</li>
    </ul>
  );
};

export default MenuLinks;
