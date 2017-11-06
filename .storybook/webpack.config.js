// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSWebpackPluginConfig = new ExtractTextPlugin('application.css');

module.exports = {
  plugins: [
    CSSWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
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
    ],
  },
};
