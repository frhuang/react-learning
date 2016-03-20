import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createRoutes from './routes/routes.jsx';
import { browserHistory } from 'react-router';

const initialState = window.__INITIAL_STATE__;
const root = document.getElementById('app');
const store = configureStore(initialState);

render(
    <Provider store={store}>
        {createRoutes(browserHistory)}
    </Provider>,
    root);