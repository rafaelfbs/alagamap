/* eslint-disable @typescript-eslint/camelcase */
import * as path from "path";
import * as webpack from "webpack";
import { GenerateSW } from "workbox-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackRootPlugin from "html-webpack-root-plugin";
import FaviconsWebpackPlugin from "@tech-wizards/favicons-webpack-plugin";
import jimpAdapter from "./loaders/responsive-loader/jimp-adapter";

export default <webpack.Configuration>{
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.USE_SERVICE_WORKER": "true",
    }),
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
      {
        test: /\.(woff2|woff|eot|ttf|svg)$/,
        loaders: ["file-loader"],
      },
      {
        test: /\.png$/,
        resourceQuery: /jimp/,
        loader: "responsive-loader",
        options: {
          adapter: jimpAdapter,
        },
      },
    ],
  },
};
