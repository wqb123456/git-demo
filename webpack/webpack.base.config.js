const path = require('path');
const { ENTRY_PATH, DIST_PATH, IS_DEV } = require('./webpackUtils/variable');
const resolveConfig = require('./webpackUtils/resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.join(process.cwd(), ENTRY_PATH, 'index.tsx'),
  output: {
    path: path.join(process.cwd(), DIST_PATH),
    filename: IS_DEV ? '[name].bundle.js' : '[name]_[chunkhash:8].bundle.js',
    clean: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js)$/,
        use: ['babel-loader?cacheDirectory=true'],
        exclude: [/node_modules/],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.jpg$/,
        type: 'asset/resource', // webpack5语法
        generator: {
          filename: 'static/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: resolveConfig,
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['.tsx'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new CssMinimizerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), ENTRY_PATH, 'index.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
