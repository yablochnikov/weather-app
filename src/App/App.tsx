import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Spinner from '../components/spinner/spinner';
import ErrorBoundary from '../components/Toast/ErrorToast';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { getCurrentWeather } from '../utils/position';

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
  const { isLoaded, error } = useAppSelector((state) => state.weatherReducer);

  useEffect(() => {
    getCurrentWeather(dispatch);
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
