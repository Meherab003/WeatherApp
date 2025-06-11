import {
  Cloud,
  Heart,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";

const WeatherBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center md:max-w-3/4 lg:max-w-1/2 mx-auto rounded-3xl bg-white/30 shadow-2xl lg:p-10 ">
      <div className="w-full text-end ">
        <button className="btn btn-ghost border-2 border-sky-500 rounded-xl hover:bg-transparent hover:shadow-md hover:shadow-sky-800 text-white">
          Add To Favorite <Heart color="red" size={20} />
        </button>
      </div>
      <div className="flex justify-around items-center my-10 w-full">
        <div>
          <p>cloud</p>
          <h2 className="text-7xl font-bold">16°C</h2>
          <h3 className="text-4xl">Dhaka</h3>
          <p>06:09 - Sunday, 9 Dec '24</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            Thunderstorm With light drizzle
          </h3>
          <ul className="flex flex-col justify-start gap-2 items-start mt-5 w-full">
            <li className="w-full flex items-center justify-between">
              <span>Temp Max</span>{" "}
              <span className=" flex items-center justify-end gap-2">
                19° Wind <ThermometerSun color="red" size={20} />
              </span>
            </li>
            <li className="w-full flex items-center justify-between">
              <span>Temp Min</span>{" "}
              <span className=" flex items-center justify-end gap-2">
                19° Wind <ThermometerSnowflake color="blue" size={20} />
              </span>
            </li>
            <li className="w-full flex items-center justify-between">
              <span>Humidity</span>{" "}
              <span className=" flex items-center justify-end gap-2">
                19° Wind <Thermometer color="black" size={20} />
              </span>
            </li>
            <li className="w-full flex items-center justify-between">
              <span>Cloudy</span>{" "}
              <span className=" flex items-center justify-end gap-2">
                19° Wind <Cloud color="white" size={20} />
              </span>
            </li>
            <li className="w-full flex items-center justify-between">
              <span>Wind</span>{" "}
              <span className=" flex items-center justify-end gap-2">
                19° Wind <Wind color="white" size={20} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;
