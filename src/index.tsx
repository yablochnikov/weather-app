import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App/App';
import { setupStore } from './store/store';
import GlobalStyles from './styles/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </>,
);
