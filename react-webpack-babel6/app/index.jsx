import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App.jsx';

const root = document.getElementById('app');

ReactDom.render(
    <App />,
    root
)