import { useContext } from "react";
import { WeatherContext } from "../../context";
import AddToFavorite from "./AddToFavorite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

const WeatherBoard = () => {
  const { loading } = useContext(WeatherContext);
  return (
    <>
      {loading.state ? (
        <div className="flex flex-col items-center justify-center w-11/12 md:max-w-3/4 lg:max-w-1/2 mx-auto p-2 md:p-10 my-5">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-11/12 md:max-w-3/4 lg:max-w-1/2 mx-auto rounded-3xl bg-white/30 shadow-2xl p-2 md:p-10 my-5">
          <AddToFavorite />
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center md:my-10 w-full p-2 gap-5">
            <WeatherHeadline />
            <WeatherCondition />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherBoard;
