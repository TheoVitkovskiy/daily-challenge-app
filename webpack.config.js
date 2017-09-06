const webpack = require('webpack');

module.exports = {
    devtool: 'source-map'
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warning: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          'API_HOST': 'https://daily-challenge.herukoapp.com'
        }
      })
    ],
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}
