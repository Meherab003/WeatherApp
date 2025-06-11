import { Search } from "lucide-react";
import { useContext, useState } from "react";
import { LocationContext } from "../context";
import { getLocationByName } from "../data/location-data";
import { useDebounce } from "../hooks";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const deSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    deSearch(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const fetchedLocation = getLocationByName(searchTerm);
  //   console.log(fetchedLocation);
  //   setSelectedLocation({ ...fetchedLocation });
  // };
  return (
    <form
    //  onSubmit={handleSubmit}
    >
      <label className="input rounded-full lg:w-80 border-2 border-sky-500 font-title text-white bg-transparent pr-0">
        <Search color="gray" size={20} />
        <input
          type="search"
          placeholder="Search Location"
          value={searchTerm}
          onChange={handleChange}
          required
        />
        {/* <button
          type="submit"
          className="btn btn-sm border-none btn-circle bg-white/30 rounded-full p-1"
        >
          <Search color="gray" />
        </button> */}
      </label>
    </form>
  );
};

export default SearchBar;
