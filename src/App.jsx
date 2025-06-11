import Home from "./page/Home";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Home />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
