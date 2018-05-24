const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  },
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js'
  }
}