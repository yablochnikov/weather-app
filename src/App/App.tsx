import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Spinner from '../components/spinner/spinner';
import ErrorBoundary from '../components/Toast/ErrorToast';
import { IWeather, IWeekForecast } from '../types/types';
import { getCurrentLocation } from '../utils/position';

import { Container } from './Styles.app';

const theme = {
  sidebarBg: '#fff',
  mainBg: '#f6f6f8',
  additionalGray: '#b9b9b9',
  progressBar: '#444EC8',
  active: '#000',
};

function App() {
  const [weather, setWeather] = useState<IWeather>({});
  const [isWeatherLoaded, setWeatherLoaded] = useState(false);
  const [weekWeatherData, setWeekWeatherData] = useState<IWeekForecast>({});
  const [units, setUnits] = useState('metric');
  const [hourlyOrWeekly, setHourlyOrWeekly] = useState('weekly');
  const [isError, setError] = useState(false);

  const onWeatherLoaded = (weatherData: IWeather): void => {
    setWeather(weatherData);
    setWeatherLoaded(true);
  };

  useEffect((): void => {
    getCurrentLocation(units, setWeekWeatherData, onWeatherLoaded, setError);
  }, []);

  const renderErrorMessage = () => {
    return <>{isError && <ErrorBoundary />}</>;
  };

  return (
    <>
      {renderErrorMessage()}

      <ThemeProvider theme={theme}>
        {isWeatherLoaded ? (
          <Container>
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
              visibility={weather.visibility}
              units={units}
              hourlyOrWeekly={hourlyOrWeekly}
              setHourlyOrWeekly={setHourlyOrWeekly}
            />
          </Container>
        ) : (
          <Spinner />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
