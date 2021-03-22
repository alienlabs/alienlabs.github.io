//
// (C) 2021 alienlabs.io
//

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      templateParameters: {
        title: 'Demo'
      }
    })
  ]
};
