const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const srcDir = path.resolve(process.cwd(), 'src');
const buildDir = path.resolve(process.cwd(), 'build/');
const CSSWebpackPluginConfig = new ExtractTextPlugin('application.css');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: path.resolve(buildDir, 'index.html'),
  inject: 'body'
});

module.exports = {
  entry: './index.js',
  context: srcDir,
  resolve: {
    alias: {
      assets: path.resolve(srcDir, 'assets'),
      components: path.resolve(srcDir, 'components'),
      containers: path.resolve(srcDir, 'containers'),
      elements: path.resolve(srcDir, 'elements'),
      images: path.resolve(srcDir, 'assets/images'),
      pages: path.resolve(srcDir, 'pages'),
      panes: path.resolve(srcDir, 'panes'),
      store: path.resolve(srcDir, 'store'),
      styles: path.resolve(srcDir, 'styles'),
      utils: path.resolve(srcDir, 'utils')
    }
  },
  output: {
    path: buildDir,
    filename: 'application.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
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
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/'
            }
          }
        ]
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
                importLoaders: 1
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
