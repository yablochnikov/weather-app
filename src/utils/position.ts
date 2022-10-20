import useWeatherService from '../services/weatherService';
import { IWeather, IWeekForecast } from '../types/types';

const { getWeatherByGeo, getWeatherForWeek } = useWeatherService();

export const getPosition = (
  setWeather: (weather: IWeather) => void,
  setWeekWeatherData: (weather: IWeekForecast) => void,
  units: string,
) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    getWeatherByGeo(pos.coords.latitude, pos.coords.longitude, units).then(
      (res) => {
        res && setWeather(res);
      },
    );
    getWeatherForWeek(pos.coords.latitude, pos.coords.longitude, units).then(
      (res) => {
        res && setWeekWeatherData(res);
      },
    );
  });
};
