import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar/Sidebar';
import Spinner from '../components/spinner/spinner';
import useWeatherService from '../services/weatherService';
import { IWeather } from '../types/types';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 630px;
  background-color: #f6f6f8;
`;

function App() {
  const [weather, setWeather] = useState<IWeather>({});
  const [isWeatherLoaded, setWeatherLoaded] = useState(false);
  const { getWeatherByCity } = useWeatherService();

  const onWeatherLoaded = (weatherData: IWeather) => {
    setWeather(weatherData);
    setWeatherLoaded(true);
  };

  useEffect(() => {
    getWeatherByCity('Vinnytsia').then((data) => {
      data && onWeatherLoaded(data);
    });
  }, []);

  console.log(weather);
  return (
    <AppWrapper>
      {isWeatherLoaded ? <Sidebar weather={weather} /> : <Spinner />}
    </AppWrapper>
  );
}

export default App;
