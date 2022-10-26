import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWeather, IWeekForecast } from './../../types/types';

type Weather = {
  weekWeather: IWeekForecast;
  weather: IWeather;
  isLoaded: boolean;
  error: boolean;
  units: string;
  hourlyOrWeekly: string;
};

const initialState: Weather = {
  weekWeather: {},
  weather: {},
  isLoaded: false,
  error: false,
  units: 'metric',
  hourlyOrWeekly: 'weekly',
};

export const weatherSlice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isLoaded = false;
    },

    fetchWeatherError(state) {
      state.isLoaded = false;
      state.error = true;
    },

    fetchWeatherWeekSuccess(state, action: PayloadAction<IWeekForecast>) {
      state.error = false;
      state.isLoaded = true;
      state.weekWeather = action.payload;
    },

    fetchWeatherGeoSuccess(state, action: PayloadAction<IWeather>) {
      state.error = false;
      state.isLoaded = true;
      state.weather = action.payload;
    },

    setUnits(state, action: PayloadAction<string>) {
      state.units = action.payload;
    },

    setHourlyOrWeekly(state, action: PayloadAction<string>) {
      state.hourlyOrWeekly = action.payload;
    },
  },
});

export default weatherSlice.reducer;
