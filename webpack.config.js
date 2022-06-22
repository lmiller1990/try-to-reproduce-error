const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      net: false
    },
    extensions: ['.js', '.jsx', '.scss', '.ts', '.tsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: [/node_modules/],
        use: [
          {
            loader: '@jsdevtools/coverage-istanbul-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}
