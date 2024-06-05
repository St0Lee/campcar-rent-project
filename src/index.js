import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from './common/styles/styles';
import { store } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter basename="/campcar-rent-project">
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Provider>
    </HashRouter>
  </React.StrictMode>
);
