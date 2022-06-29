const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { DIST_PATH } = require('./webpackUtils/variable');

const config = {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean), //这里增加
  cache: { type: 'memory' },
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    compress: true,
    host: 'localhost',
    hot: true,
    port: 9093,
    client: {
      logging: 'error',
    },
    static: {
      directory: DIST_PATH,
    },
  },
};

module.exports = webpackMerge.merge(baseConfig, config);
