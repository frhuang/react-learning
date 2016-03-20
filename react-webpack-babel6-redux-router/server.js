var webpack = require('webpack'),
    express = require('express'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
    compiler = webpack(config);

var app = new express();

app.use(webpackDevMiddleware(compiler, {
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.listen(3000 ,function(err, result) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('listening at localhost:3000');
});
