"use client";

import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, Wind, Loader } from "lucide-react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{
    location: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    forecast: { day: string; temp: number; condition: string }[];
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "29d9486373564b7c83d92556251603";
  const LOCATION = "12.6283,124.0949";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=5&aqi=no&alerts=no`
        );
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message);
        }

        setWeather({
          location: data.location.name,
          temperature: data.current.temp_c,
          condition: data.current.condition.text,
          humidity: data.current.humidity,
          windSpeed: data.current.wind_kph,
          forecast: data.forecast.forecastday.map((day: any) => ({
            day: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
            temp: day.day.avgtemp_c,
            condition: day.day.condition.text,
          })),
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="text-yellow-400" size={24} />;
      case "partly cloudy":
        return <Cloud className="text-gray-400" size={24} />;
      case "rainy":
        return <CloudRain className="text-blue-400" size={24} />;
      default:
        return <Sun className="text-yellow-400" size={24} />;
    }
  };

  if (loading) {
    return (
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Local Weather</h2>
          <div className="flex justify-center">
            <Loader className="animate-spin" size={32} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Local Weather</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Local Weather</h2>

        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-blue-600 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{weather?.location}</h3>
                {getWeatherIcon(weather?.condition || "")}
              </div>

              <div className="text-5xl font-bold mb-4">{weather?.temperature}°C</div>
              <p className="text-xl mb-6">{weather?.condition}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm">Humidity</p>
                  <p className="font-semibold">{weather?.humidity}%</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Wind Speed</p>
                  <div className="flex items-center">
                    <Wind size={16} className="mr-1" />
                    <p className="font-semibold">{weather?.windSpeed} km/h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6">5-Day Forecast</h3>

              <div className="grid grid-cols-5 gap-2">
                {weather?.forecast.map((day, index) => (
                  <div key={index} className="text-center">
                    <p className="font-medium mb-2">{day.day}</p>
                    <div className="flex justify-center mb-2">{getWeatherIcon(day.condition)}</div>
                    <p className="font-bold">{day.temp}°C</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Plan your stay with confidence. Enjoy our indoor and outdoor activities regardless of weather.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
