const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs')
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src', '*.html'),
        to: path.resolve(__dirname, 'docs'),
        flatten: true
      }
    ]),
    new LiveReloadPlugin()
  ]
};
