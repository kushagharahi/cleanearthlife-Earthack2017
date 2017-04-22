var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[chunkhash].js',
    // To the `scripts` folder
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    // Special compilation rules
    rules: [
      {
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        enforce: 'pre',
        options: {
          fix: true
        }
      },
      // use vue-loader for all *.vue files
      {
        test: /.vue$/,
        loader: 'vue-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        options: {
          name: 'bundle',
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: 'imgs/',
          outputPath: 'imgs/'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
          // assumes vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    })
  ]
}