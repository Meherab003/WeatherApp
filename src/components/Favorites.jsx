import { Heart } from "lucide-react";

const Favorites = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost border-2 border-sky-500 rounded-xl hover:bg-transparent hover:shadow-md hover:shadow-sky-800 text-white"
      >
        Favorites <Heart color="red" size={22} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content backdrop-blur-3xl border border-sky-500  rounded-box z-1 mt-3 w-52 p-2 shadow-xl text-white"
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Favorites;
