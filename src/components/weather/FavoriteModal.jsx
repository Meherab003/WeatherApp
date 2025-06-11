import { Heart, X } from "lucide-react";
import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

const FavoriteModal = ({ onShow }) => {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xl"
      //   onClick={onClose}
    >
      <div
        className="bg-sky-200/70 rounded-xl shadow-lg max-w-sm w-11/12 mx-4 "
        onClick={(e) => e.stopPropagation()} // Prevent outside close when clicking inside
      >
        <div className="flex justify-end p-6 pb-0">
          <button
            onClick={onShow}
            className="btn btn-sm btn-ghost btn-circle shadow-lg"
          >
            <X strokeWidth={3} color="red" />
          </button>
        </div>
        <ul className="w-full flex flex-col gap-2 mt-5 p-6 pt-2">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <li
                key={favorite.location}
                className="text-lg font-medium shadow w-full p-2 rounded-xl"
              >
                <button
                  onClick={() => {
                    setSelectedLocation({ ...favorite });
                    onShow();
                  }}
                  className="flex items-center justify-between gap-2 w-full"
                >
                  <span className="mt-1">{favorite.location}</span>
                  <Heart strokeWidth={1} color="red" fill="red" />
                </button>
              </li>
            ))
          ) : (
            <p>Nothing is added in the favorite section</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteModal;
