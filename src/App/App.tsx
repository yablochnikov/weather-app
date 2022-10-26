import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Spinner from '../components/spinner/spinner';
import ErrorBoundary from '../components/Toast/ErrorToast';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { fetchGeoWeather, fetchWeekWeather } from '../store/actionCreators';
import { weatherSlice } from '../store/slices/weather';

import { Container } from './Styles.app';

const theme = {
  sidebarBg: '#fff',
  mainBg: '#f6f6f8',
  additionalGray: '#b9b9b9',
  progressBar: '#444EC8',
  active: '#000',
};

function App() {
  const dispatch = useAppDispatch();
  const { isLoaded, error, units } = useAppSelector(
    (state) => state.weatherReducer,
  );

  const getCurrentWeather = () => {
    const successCallback = async (position: {
      coords: { latitude: number; longitude: number };
    }) => {
      dispatch(
        fetchWeekWeather(
          position.coords.latitude,
          position.coords.longitude,
          units,
        ),
      );
      dispatch(
        fetchGeoWeather(
          position.coords.latitude,
          position.coords.longitude,
          units,
        ),
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

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const renderErrorMessage = () => {
    return <>{error && <ErrorBoundary />}</>;
  };

  return (
    <>
      {renderErrorMessage()}

      <ThemeProvider theme={theme}>
        {isLoaded ? (
          <Container>
            <Sidebar />
            <Main />
          </Container>
        ) : (
          <Spinner />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
