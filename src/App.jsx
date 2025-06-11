import WeatherBoard from "./components/weather/WeatherBoard";
import Header from "./layout/Header";

const App = () => {
  return (
    <div className="font-title bg-[url(https://www.everwallpaper.co.uk/cdn/shop/products/1_d59dba40-942d-4380-b548-2a757bb805a0.jpg?v=1739778217)] bg-cover min-h-screen relative">
      <div className="w-full min-h-screen backdrop-blur-xs">
        <Header />
        <main className="min-h-[calc(100vh-56px)] flex items-center justify-center">
          <section className="w-full">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
