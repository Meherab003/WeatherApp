import { Heart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, []);

  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="w-full text-end ">
      <button
        className="btn btn-ghost btn-sm md:btn-md border-2 border-sky-500 rounded-full mt-2 mr-2 md:rounded-xl hover:bg-transparent hover:shadow-md hover:shadow-sky-800 text-black"
        onClick={handleFavorites}
      >
        Add To Favorite{" "}
        <Heart
          color="red"
          size={20}
          fill={`${isFavorite ? "red" : "transparent"}`}
        />
      </button>
    </div>
  );
};

export default AddToFavorite;
