const path = require('path');
const buildDir = path.resolve(process.cwd(), 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app.html',
  filename: path.resolve(buildDir, 'app.html'),
  inject: 'body'
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: buildDir,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /build|node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /build|node_modules/}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};

