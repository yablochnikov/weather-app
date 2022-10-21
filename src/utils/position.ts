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

export const getCurrentLocation = (
  units: string,
  setWeekWeatherData: React.Dispatch<React.SetStateAction<IWeekForecast>>,
  onWeatherLoaded: (weatherData: IWeather) => void,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  const successCallback = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    getWeatherForWeek(
      position.coords.latitude,
      position.coords.longitude,
      units,
    ).then((data) => {
      data && setWeekWeatherData(data);
    });
    getWeatherByGeo(
      position.coords.latitude,
      position.coords.longitude,
      units,
    ).then((data) => {
      data && onWeatherLoaded(data);
    });
  };

  const errorCallback = (error: { code: number; message: string }): void => {
    setError(true);
    throw new Error(error.message);
  };

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 1000,
  };

  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    options,
  );
};
