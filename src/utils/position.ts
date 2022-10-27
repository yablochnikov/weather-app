import { fetchWeather } from '../store/actionCreators';
import { weatherSlice } from '../store/slices/weather';
import { AppDispatch } from '../store/store';

export const getPosition = (dispatch: AppDispatch) => {
  dispatch(weatherSlice.actions.fetchWeather());

  navigator.geolocation.getCurrentPosition((pos) => {
    dispatch(
      fetchWeather({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }),
    );
  });
};

export const getCurrentWeather = (dispatch: AppDispatch) => {
  const successCallback = async (pos: {
    coords: { latitude: number; longitude: number };
  }) => {
    dispatch(
      fetchWeather({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }),
    );
  };

  const errorCallback = (error: { code: number; message: string }): void => {
    dispatch(weatherSlice.actions.fetchWeatherError());
    throw new Error(error.message);
  };

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  };

  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    options,
  );
};
