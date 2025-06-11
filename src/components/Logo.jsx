const Logo = () => {
  return (
    <div className="flex-1 flex items-center justify-start gap-1">
      <img
        className="w-10 2xl:w-12"
        src="https://img.icons8.com/lollipop/48/partly-cloudy-night.png"
        alt="logo"
      />
      <a className="font-semibold text-xl md:text-3xl 2xl:text-4xl text-sky-300 font-title mt-2">
        Weather App
      </a>
    </div>
  );
};

export default Logo;
