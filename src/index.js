import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { account } from './reducers/account';

const store = createStore(account, applyMiddleware(logger, thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

