import AnnouncementBar from "./AnnouncementBar.tsx";
import MainNav from "./MainNav.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store.ts";
import { toggleBanner } from "../../reducers/UiSlice.ts";

const NavBar = () => {
  const dispatch = useDispatch();
  const showBanner = useSelector((state: RootState) => state.ui.showBanner);

  return (
    <header className="w-full sticky top-0 z-50">
      {showBanner && (
        <AnnouncementBar setShowBanner={() => dispatch(toggleBanner())} />
      )}
      <MainNav />
    </header>
  );
};

export default NavBar;
