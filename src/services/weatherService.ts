import axios from 'axios';

import { IWeather } from '../types/types';

const useWeatherService = () => {
  const _apiKey = '2d6a44f98c2ab61df1d66550ecc9286f';

  const getWeatherByCity = async (city: string) => {
    try {
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${_apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };

  return { getWeatherByCity };
};

export default useWeatherService;
