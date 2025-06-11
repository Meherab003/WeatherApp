import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  Haze,
  MapPin,
  Snowflake,
  Sun,
} from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return <CloudDrizzle />;
      case "Clouds":
        return <Cloud />;
      case "Clear":
        return <Sun color="orange" />;
      case "Snow":
        return <Snowflake color="skyblue" />;
      case "Thunder":
        return <CloudLightning />;
      case "Fog":
        return <CloudFog color="lightgray" />;
      case "Haze":
        return <Haze color="gray" />;
      case "Mist":
        return <CloudFog color="skyblue" />;

      default:
        return <Cloud />;
    }
  };
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="flex gap-2 items-center mb-2">
        <span>{getWeatherIcon(weatherData.climate)}</span>{" "}
        <span className="mt-1">{weatherData.climate}</span>
      </p>
      <h2 className="text-7xl font-bold">{weatherData.temperature}°C</h2>
      <h3 className="text-4xl flex items-start">
        <MapPin size={30} strokeWidth={3} /> {weatherData.location}
      </h3>
      <p className="text-xs">
        {getFormattedDate(weatherData.time, "time", false)} -{" "}
        {getFormattedDate(weatherData.time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
