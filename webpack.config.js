const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const buildDir = path.resolve(process.cwd(), 'build');
const CSSWebpackPluginConfig = new ExtractTextPlugin('application.css');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: path.resolve(buildDir, 'index.html'),
  inject: 'body'
});

module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, "src"),
  output: {
    path: buildDir,
    filename: 'application.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /build|node_modules/
      },
      {
        test: /styles\/.*\.css$/,
        exclude: /build|node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              }
            },
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /(build|node_modules|src\/styles)\//,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: env.NODE_ENV === 'production',
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                camelCase: true,
                localIdentName: '[path][local]-[hash:base64:5]'
              }
            },
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ]
        })
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CSSWebpackPluginConfig]
};
