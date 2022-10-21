import axios from 'axios';

import { IWeather, IWeekForecast } from '../types/types';

const useWeatherService = () => {
  const _apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const getWeatherByCity = async (city: string, units: string) => {
    try {
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${_apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };

  const getWeatherForWeek = async (lat: number, lon: number, units: string) => {
    try {
      const response = await axios.get<IWeekForecast>(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,alerts&appid=${_apiKey}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherByGeo = async (lat: number, lon: number, units: string) => {
    try {
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${_apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  return {
    getWeatherByCity,
    getWeatherByGeo,
    getWeatherForWeek,
  };
};

export default useWeatherService;
