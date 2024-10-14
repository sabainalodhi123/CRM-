const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  plugins: [
    new NodePolyfillWebpackPlugin(),
  ],
};