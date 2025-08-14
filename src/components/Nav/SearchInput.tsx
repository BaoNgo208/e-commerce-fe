import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex-1">
      <label className="relative block">
        <span className="absolute inset-y-0 left-3 flex items-center">
          <FaSearch size={14} />
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-9 pl-9 pr-4 rounded-full bg-gray-100 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/50"
        />
      </label>
    </div>
  );
};

export default SearchInput;
