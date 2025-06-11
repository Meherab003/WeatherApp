import {
  Cloud,
  Droplet,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context";

const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  const { maxTemperature, minTemperature, humidity, cloudPercentage, wind } =
    weatherData;
  return (
    <div>
      <h3 className="text-xl font-semibold">Thunderstorm With light drizzle</h3>
      <ul className="flex flex-col justify-start gap-2 items-start mt-5 w-full">
        <li className="w-full flex items-center justify-between">
          <span>Temp Max</span>{" "}
          <span className=" flex items-center justify-end gap-2">
            {maxTemperature}°C
            <ThermometerSun color="white" size={20} />
          </span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span>Temp Min</span>{" "}
          <span className=" flex items-center justify-end gap-2">
            {minTemperature}°<ThermometerSnowflake color="white" size={20} />
          </span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span>Humidity</span>{" "}
          <span className=" flex items-center justify-end gap-2">
            {humidity}%<Droplet color="white" size={20} />
          </span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span>Cloudy</span>{" "}
          <span className=" flex items-center justify-end gap-2">
            {cloudPercentage}%<Cloud color="white" size={20} />
          </span>
        </li>
        <li className="w-full flex items-center justify-between">
          <span>Wind</span>{" "}
          <span className=" flex items-center justify-end gap-2">
            {wind} km/h
            <Wind color="white" size={20} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
