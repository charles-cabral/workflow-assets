import webpack from "webpack";
import { paths } from "./gulp/config";

const WebpackNotifierPlugin = require("webpack-notifier");

const webpackConfig = {
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: {
    app: paths.scripts.src
  },
  output: {
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  // console.log('Welcome to production');
}
if (process.env.NODE_ENV === "development") {
  webpackConfig.devtool = "source-map";
  // console.log('Welcome to development');
}

module.exports = webpackConfig;
