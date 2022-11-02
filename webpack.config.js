const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const outputPath = process.env.NODE_ENV === "production" ? "dist" : "staging"
const pathsToClean = [outputPath]

var config = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
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
    new CleanWebpackPlugin({
      watch: false,
      exclude: ["index.html"],
      dry: true,
    }),
  ],
}

var menuConfig = Object.assign({}, config, {
  entry: "./src/leftmenu/index",
  output: {
    path: path.join(__dirname, outputPath + "/leftmenu"),
    filename: "bundle.[contenthash].js",
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
    path: path.join(__dirname, outputPath + "/combo"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/combo/index.html",
      inject: false,
    }),
  ],
})

var extrasConfig = Object.assign({}, config, {
  entry: "./src/rightmenu/index",
  output: {
    path: path.join(__dirname, outputPath + "/rightmenu"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "src/rightmenu/index.html",
      inject: false,
    }),
  ],
})

module.exports = [menuConfig, comboConfig, extrasConfig]
