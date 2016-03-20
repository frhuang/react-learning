import '../sass/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createRoutes from './routes/routes.jsx';
import { browserHistory } from 'react-router';
import DevTools from './containers/DevTools.js';
import { Router } from 'react-router';

const root = document.getElementById('app');
const store = configureStore();

render(
    <div>
    <Provider store={store}>
        <Router children={createRoutes} history={browserHistory}/>
    </Provider>
        <DevTools store={store}/>
    </div>
   ,
    root);