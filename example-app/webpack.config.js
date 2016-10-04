var path = require("path");
module.exports = {
  entry: './src/components/app.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
