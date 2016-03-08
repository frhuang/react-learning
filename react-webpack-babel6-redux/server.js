var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    compiler = webpack(config);

config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var server = new WebpackDevServer(compiler, {
    historyApiFallback: false,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
});

server.listen(8080, '127.0.0.1', function(err, result) {
    if(err) {
        console.log(err);
    }
    console.log('listening at 127.0.0.1:8080');
});