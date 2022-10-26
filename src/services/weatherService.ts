import axios from 'axios';

import { IWeather } from '../types/types';

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

  return {
    getWeatherByCity,
  };
};

export default useWeatherService;
