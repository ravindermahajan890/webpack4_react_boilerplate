const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
      })
    ]
  }
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name]-chunk.js",
    publicPath: "/",
    path: path.resolve(__dirname, "../dist")
  },
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          postCSSLoader,
          "sass-loader"
        ]
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
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
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
    }),
    new CopyWebpackPlugin([{ from: "./src/images", to: "images" }]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ]
};
