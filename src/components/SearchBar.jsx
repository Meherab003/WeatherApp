import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <label className="input rounded-full lg:w-80 border-2 border-sky-500 font-title text-lg text-gray-700 bg-transparent ">
      <Search color="gray" />
      <input type="search" required placeholder="Search" />
    </label>
  );
};

export default SearchBar;
