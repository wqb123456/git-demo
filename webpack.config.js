const buildConfig = require('./webpack/webpack.prod.config');
const devConfig = require('./webpack/webpack.dev.config');
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;
