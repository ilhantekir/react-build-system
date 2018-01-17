const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    extractSass
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
