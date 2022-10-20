import ReactDOM from 'react-dom/client';

import App from './App/App';
import GlobalStyles from './styles/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
