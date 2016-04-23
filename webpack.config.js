module.exports = {
  entry: "./app",
  output: {
    path: __dirname + '/app',
    filename: "bundle.js"
  },

  devServer: {
    inline: true,
    port: 8080,
    contentBase: "./app"
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }]
  }
};
