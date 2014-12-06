module.exports = {
  entry: './src/app.jsx',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
        { test: /\.png$/, loader: "file-loader" },
        { test: /\.jpe?g$/, loader: "file-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
  //         { test: /\.less$/, loaders: [
  //   "style-loader",
  //   "css-loader",
  //   require.resolve("./css-fix-loader.js"),
  //   "less-loader"
  // ] },
        { test: /\.less$/, loader: "style!raw!less"},
        { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
    ]
  }
};