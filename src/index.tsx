import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
///// IMPORT REDUX
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

