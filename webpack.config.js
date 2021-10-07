const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,  // read .sass and .scss file
        use: [
          'style-loader',     // create style node from JS strings
          'css-loader',       // translate CSS into CommonJS
          'sass-loader'       // compile SASS to CSS
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 8080,
    open: true
  }
};
