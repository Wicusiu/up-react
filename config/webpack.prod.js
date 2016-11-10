var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.join(__dirname, '..', 'app');

module.exports = {
  devtool: 'source-map',
  entry: './app/index.tsx',
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: APP_DIR
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts-loader'],
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },
    {
      test: /\.jpg$/,
      loader: "file-loader"
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //new webpack.optimize.UglifyJsPlugin({
    //  compressor: {
    //    warnings: false
    //  }
    //})
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  },
  tslint: {
    configuration: {
        rules: {
            quotemark: [false, "double"],
            indent: [false, "tabs"]
        }
    },
    emitErrors: true,
    failOnHint: true
  }
}
