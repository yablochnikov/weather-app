import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IWeather, IWeekForecast } from '../types/types';

export const fetchWeather = createAsyncThunk(
  'weather/fetchAll',
  async (options: { lon: number; lat: number }) => {
    const _apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const responses = [];
    const responseCurrent = await axios.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${options.lat}&lon=${options.lon}&units=metric&appid=${_apiKey}`,
    );
    responses.push(responseCurrent.data);
    const responseWeek = await axios.get<IWeekForecast>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${options.lat}&lon=${options.lon}&units=metric&exclude=current,minutely,alerts&appid=${_apiKey}`,
    );
    responses.push(responseWeek.data);
    return responses;
  },
);
