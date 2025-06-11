import { useState } from "react";
import Favorites from "../components/Favorites";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import FavoriteModal from "../components/weather/FavoriteModal";

const Header = () => {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <div className="navbar bg-transparent px-5 md:pt-5 md:px-10 flex flex-col md:flex-row gap-2">
      <Logo />
      <div className="flex gap-2">
        <SearchBar />
        <Favorites onShow={() => setShowFavModal(!showFavModal)} />
        {showFavModal && (
          <FavoriteModal onShow={() => setShowFavModal(!showFavModal)} />
        )}
      </div>
    </div>
  );
};

export default Header;
