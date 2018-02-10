const path = require('path')
const webpack = require('webpack')

var config = {
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader',
        include: __dirname
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

var menuConfig = Object.assign({}, config, {
  entry: './src/leftmenu/index',
  output: {
    path: path.join(__dirname,'dist/leftmenu'),
    filename: 'bundle.js',
  },
})

var comboConfig = Object.assign({}, config, {
  entry: './src/combo/index',
  output: {
    path: path.join(__dirname,'dist/combo'),
    filename: 'bundle.js',
  },
})

var extrasConfig = Object.assign({}, config, {
  entry: './src/rightmenu/index',
  output: {
    path: path.join(__dirname,'dist/rightmenu'),
    filename: 'bundle.js',
  },
})

module.exports = [menuConfig, comboConfig, extrasConfig]
