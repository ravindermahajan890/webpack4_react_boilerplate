const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name]-chunk.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
