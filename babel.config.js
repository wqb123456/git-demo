const { IS_DEV } = require('./webpack/webpackUtils/variable');

const plugins = IS_DEV ? [['react-refresh/babel', { skipEnvCheck: true }]] : [];

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins,
};
