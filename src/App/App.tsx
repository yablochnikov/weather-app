import { useEffect, useState } from 'react';

import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Spinner from '../components/Spinner/Spinner';
import useWeatherService from '../services/weatherService';
import { IWeather, IWeekForecast } from '../types/types';

import { AppWrapper } from './AppStyles';

function App() {
  const [weather, setWeather] = useState<IWeather>({});
  const [isWeatherLoaded, setWeatherLoaded] = useState(false);
  const [weekWeatherData, setWeekWeatherData] = useState<IWeekForecast>({});
  const [units, setUnits] = useState('metric');
  const [hourlyOrWeekly, setHourlyOrWeekly] = useState('weekly');
  const { getWeatherByGeo, getWeatherForWeek } = useWeatherService();

  const onWeatherLoaded = (weatherData: IWeather): void => {
    setWeather(weatherData);
    setWeatherLoaded(true);
  };

  const getCurrentLocation = (): void => {
    const successCallback = (position: {
      coords: { latitude: number; longitude: number };
    }) => {
      getWeatherForWeek(
        position.coords.latitude,
        position.coords.longitude,
        units,
      ).then((data) => {
        data ? setWeekWeatherData(data) : console.log(weekWeatherData);
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
      console.log(error);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );
  };

  useEffect((): void => {
    getCurrentLocation();
  }, [units]);

  return (
    <AppWrapper>
      {isWeatherLoaded ? (
        <>
          <Sidebar
            units={units}
            weather={weather}
            setWeather={setWeather}
            setWeekWeatherData={setWeekWeatherData}
            weekWeatherData={weekWeatherData}
          />
          <Main
            weekWeatherData={weekWeatherData}
            setUnits={setUnits}
            visibility={weather.visibility || NaN}
            units={units}
            hourlyOrWeekly={hourlyOrWeekly}
            setHourlyOrWeekly={setHourlyOrWeekly}
          />
        </>
      ) : (
        <Spinner />
      )}
    </AppWrapper>
  );
}

export default App;
