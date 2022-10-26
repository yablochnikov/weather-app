import { fetchGeoWeather, fetchWeekWeather } from '../store/actionCreators';
import { AppDispatch } from '../store/store';

export const getPosition = (dispatch: AppDispatch, units: string) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    dispatch(
      fetchWeekWeather(pos.coords.latitude, pos.coords.longitude, units),
    );
    dispatch(fetchGeoWeather(pos.coords.latitude, pos.coords.longitude, units));
  });
};
