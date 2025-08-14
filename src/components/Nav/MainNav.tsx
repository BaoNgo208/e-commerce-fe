import MenuLinks from "./MenuLinks.tsx";
import SearchInput from "./SearchInput.tsx";
import NavIcons from "./Icons.tsx";
import Logo from "./Logo.tsx";

const MainNav = () => {
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto h-16 px-4 lg:px-8 flex items-center gap-6">
        <Logo />
        <MenuLinks />
        <SearchInput />
        <NavIcons />
      </div>
    </nav>
  );
};
export default MainNav;
