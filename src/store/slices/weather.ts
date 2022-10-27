import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchWeather } from '../actionCreators';

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

// type Responses = {

// }

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

    setUnits(state, action: PayloadAction<string>) {
      state.units = action.payload;
    },
    setHourlyOrWeekly(state, action: PayloadAction<string>) {
      state.hourlyOrWeekly = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.fulfilled.type]: (
      state,
      action: PayloadAction<Array<IWeather & IWeekForecast>>,
    ) => {
      state.error = false;
      state.isLoaded = true;
      state.weather = action.payload[0];
      state.weekWeather = action.payload[1];
    },
    [fetchWeather.pending.type]: (state) => {
      state.isLoaded = false;
    },
    [fetchWeather.rejected.type]: (state) => {
      state.isLoaded = false;
      state.error = true;
    },
  },
});

export default weatherSlice.reducer;
