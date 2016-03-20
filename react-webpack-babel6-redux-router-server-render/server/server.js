import path from 'path';
import qs from 'qs';
import webpack from 'webpack';
import config from '../webpack.config.js';
import express from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../app/store/configureStore';
import createRoutes from '../app/routes/routes.jsx';
import { match, RouterContext, browserHistory } from 'react-router';
import createLocation from 'history/lib/createLocation';
import createMemoryHistory from 'history/lib/createMemoryHistory';

const compiler = webpack(config);

var app = new express();

app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(WebpackHotMiddleware(compiler));

app.use(handleRender);

function handleRender(req, res) {
    const routes = createRoutes(browserHistory);
    const location = createLocation(req.url);
    match({routes, location}, (err, redirectLocation, renderProps) => {
        if(err) {
            return res.status(500).send(err.message)
        }

        if(!renderProps) {
            return res.status(404).send('not found')
        }
        var store = configureStore();
        const html = renderToString(
            <Provider store={store}>
                { <RouterContext {...renderProps} /> }
            </Provider>
        )
        const initialState = store.getState();
        res.send(renderFullPage(html, initialState));
    })
}

function renderFullPage(html, initialState) {
    return `
        <!doctype html>
        <html>
          <head>
            <title>react-webpack-babel6-redux-router-server-render</title>
          </head>
          <body>
            <div id="app">${html}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/build/bundle.js"></script>
          </body>
        </html>
    `
}

app.listen(3000 ,function(err, result) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('listening at localhost:3000');
});


