import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App.jsx';
import Home from '../containers/Home.jsx';
import About from '../containers/About.jsx';

function routes(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    )
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
    </Route>
);