const path = require('path')
module.exports = {
  mode: 'production',
  devtool: "source-map",
  entry: {
    "surveyAdapter.bundle": {
      import: './src/SurveyAdapter/SurveyAdapter.js',
    },
    "clock.bundle": {
      import: ['./src/Clock/Clock.js', './src/Clock/styles.css'],
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ]
  }
};
