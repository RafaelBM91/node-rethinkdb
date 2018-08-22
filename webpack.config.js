var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    target: 'node',
    output: {
      path: __dirname,
      filename: 'index.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
      rules: [
          {
            test: /\.tsx?$/,
            loader:'awesome-typescript-loader'
          },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }
