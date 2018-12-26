module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.gif|png|jpg|eot|wof|woff|ttf|svg$/,
        use: ['url-loader']
      }
    ]
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map'
}
