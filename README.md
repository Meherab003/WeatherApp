# ![Weather App Banner](https://img.icons8.com/lollipop/48/partly-cloudy-night.png) Weather App

![Product](/public/product.png)

A beautiful and responsive weather application built with React that provides real-time weather information with a dynamic background that changes based on weather conditions.

## ✨ Features

- 🌍 Real-time weather data using OpenWeather API
- 🎯 Geo location support for current location weather
- 🔍 Search locations worldwide
- ❤️ Save favorite locations
- 🖼️ Dynamic backgrounds based on weather conditions
- 📱 Fully responsive design
- ⚡ Debounced search functionality
- 🌡️ Detailed weather metrics (temperature, humidity, wind, etc.)

## 🛠️ Technologies Used

- React 19
- Tailwind CSS
- DaisyUI
- Lucide React Icons
- Vite
- OpenWeather API

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Meherab003/WeatherApp.git
```

2. Install dependencies:

```bash
cd weather-app
npm install
```

3. Create a `.env` file in the root directory and add your `Free⭐` OpenWeather API key:

```env
VITE_WEATHER_API_KEY= your api key from [https://openweathermap.org/api]
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── assets/
│   └── images/         # Weather background images
├── components/         # Reusable components
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── layout/            # Layout components
├── pages/             # Page components
├── provider/          # Context providers
└── utils/             # Utility functions
```

## 🌟 Key Features Explained

### Dynamic Weather Backgrounds

The app automatically changes its background based on the current weather condition:

- ☀️ Sunny
- 🌧️ Rainy
- ⛈️ Thunderstorm
- 🌫️ Foggy
- ⛅ Cloudy

### Favorites System

- Add locations to favorites
- Quick access to favorite locations
- Persistent storage using localStorage

### Weather Information

- Current temperature
- Max/min temperature
- Humidity levels
- Wind speed
- Cloud coverage
- Location details
- Time and date

## 📱 Responsive Design

The app is fully responsive and works beautifully on:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🔧 Configuration

The app can be configured through various environment variables:

- `VITE_WEATHER_API_KEY_MEHERAB`: Your OpenWeather API key

---

## 🔌 API Documentation

This project uses the `OpenWeather API` for fetching weather data. Below are the key endpoints used:

### Current Weather Data

```http
GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `lat`     | `string` | Latitude coordinates                                      |
| `lon`     | `string` | Longitude coordinates                                     |
| `appid`   | `string` | Your API key                                              |
| `units`   | `string` | Units of measurement. Options: standard, metric, imperial |

### Response Format

```json
{
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "wind": {
    "speed": 1.5,
    "deg": 350
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ using `React` and `OpenWeather API`
