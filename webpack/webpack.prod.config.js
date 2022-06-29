const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const TerserPlugin = require('terser-webpack-plugin');
const config = {
  mode: 'production',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /react|react-dom/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = baseConfig;
