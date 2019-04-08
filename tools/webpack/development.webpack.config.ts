/* eslint-disable @typescript-eslint/camelcase */
import * as path from "path";
import * as webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackRootPlugin from "html-webpack-root-plugin";
import FaviconsWebpackPlugin from "@tech-wizards/favicons-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";

export default <webpack.Configuration>{
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      lang: "pt-br",
      dir: "ltr",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      template: path.resolve("./resources/template/index.ejs"),
    }),
    new FaviconsWebpackPlugin(path.resolve("./resources/icons/water.png")),
    new HTMLWebpackRootPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cacheId: "AlagaMAP",
      navigateFallback: "index.html",
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    https: {
      pfx: path.join(__dirname, "..", "certificates", "localhost.pfx"),
      passphrase: "YourPassword",
    },
    hot: true,
    port: 443,
    historyApiFallback: true,
    overlay: true,
  },
};
