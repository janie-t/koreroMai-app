const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '/src/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
  entry: PATHS.entry,

  output: {
    path: PATHS.output,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: PATHS.output,
    inline: true
  },

  module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
  },

  plugins: [
  ],

  devtool: 'eval-source-map'
}
