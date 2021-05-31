const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
    }
  }