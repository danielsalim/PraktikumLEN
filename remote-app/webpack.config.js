const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'remoteEntry.js',
    publicPath: 'http://localhost:3001',
  },
  devServer: {
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          optionsL {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
        },
},
    ],
  },
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new ModuleFederationPlugin({
    name: 'remoteApp',
    filename: 'remoteEntry.js',
    exposes: {
      "./RemoteComponent": "./src/RemoteComponent",
    },
  }),
],
};