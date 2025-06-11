import { useContext, useEffect, useState } from "react";
// import chill from "../assets/images/chill.jpg";
import cloudy from "../assets/images/cloudy.jpg";
import cold from "../assets/images/cold.jpg";
import foggy from "../assets/images/foggy.jpg";
import mist from "../assets/images/mist.jpg";
import rainy from "../assets/images/rainy.jpg";
import sunny from "../assets/images/sunny.jpg";
import thunder from "../assets/images/thunder.jpg";
import WeatherBoard from "../components/weather/WeatherBoard";
import { WeatherContext } from "../context";
import Header from "../layout/Header";

const Home = () => {
  const { weatherData } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");
  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "Rain":
        return rainy;
      case "Clouds":
        return cloudy;
      case "Clear":
        return sunny;
      case "Snow":
        return cold;
      case "Thunder":
        return thunder;
      case "Fog":
        return foggy;
      case "Haze":
        return mist;
      case "Mist":
        return mist;
      default:
        return sunny;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  console.log(weatherData);
  return (
    <div
      style={{ backgroundImage: `url(${climateImage})` }}
      className={`font-title bg-cover bg-no-repeat min-h-screen relative`}
    >
      <div className="w-full min-h-screen backdrop-blur-md">
        <Header />
        <main className="min-h-[calc(100vh-72px)] flex items-center justify-center">
          <section className="w-full">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
