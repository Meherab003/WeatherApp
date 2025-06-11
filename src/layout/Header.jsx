import Favorites from "../components/Favorites";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Header = () => {
  return (
    <div className="navbar bg-transparent md:pt-5 md:px-10">
      <Logo />
      <div className="flex gap-2">
        <SearchBar />
        <Favorites />
      </div>
    </div>
  );
};

export default Header;
