const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const pathsToClean = ["dist"]

var config = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader",
        include: __dirname,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CleanWebpackPlugin(pathsToClean),
  ],
}

var leftMenuConfig = Object.assign({}, config, {
  entry: "./src/leftmenu/index",
  output: {
    path: path.join(__dirname, "dist/leftmenu"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/leftmenu/index.html",
      inject: false,
    }),
  ],
})

var comboConfig = Object.assign({}, config, {
  entry: "./src/combo/index",
  output: {
    path: path.join(__dirname, "dist/combo"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/combo/index.html",
      inject: false,
    }),
  ],
})

var rightMenuConfig = Object.assign({}, config, {
  entry: "./src/rightmenu/index",
  output: {
    path: path.join(__dirname, "dist/rightmenu"),
    filename: "bundle.[chunkHash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/rightmenu/index.html",
      inject: false,
    }),
  ],
})

module.exports = [
  leftMenuConfig,
  comboConfig,
  rightMenuConfig,
]
