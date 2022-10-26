import axios from 'axios';

import { IWeather, IWeekForecast } from '../types/types';

import { weatherSlice } from './slices/weather';
import { AppDispatch } from './store';

export const fetchWeekWeather =
  (lat: number, lon: number, units: string) =>
  async (dispatch: AppDispatch) => {
    const _apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    try {
      dispatch(weatherSlice.actions.fetchWeather());
      const response = await axios.get<IWeekForecast>(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,alerts&appid=${_apiKey}`,
      );
      dispatch(weatherSlice.actions.fetchWeatherWeekSuccess(response.data));
    } catch (e) {
      dispatch(weatherSlice.actions.fetchWeatherError());
    }
  };

export const fetchGeoWeather =
  (lat: number, lon: number, units: string) =>
  async (dispatch: AppDispatch) => {
    const _apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    try {
      dispatch(weatherSlice.actions.fetchWeather());
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${_apiKey}`,
      );
      dispatch(weatherSlice.actions.fetchWeatherGeoSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(weatherSlice.actions.fetchWeatherError());
    }
  };
