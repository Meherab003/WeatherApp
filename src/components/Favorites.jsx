import { Heart } from "lucide-react";

const Favorites = ({ onShow }) => {
  return (
    <button
      onClick={onShow}
      className="btn btn-ghost border-2 border-sky-500 rounded-full md:rounded-xl hover:bg-transparent hover:shadow-md hover:shadow-sky-800 text-white"
    >
      <span className="max-sm:hidden">Favorites</span>
      <Heart color="#00a6f4" size={22} fill="#00a6f4" />
    </button>
  );
};

export default Favorites;
