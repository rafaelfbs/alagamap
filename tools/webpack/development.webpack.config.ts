import * as path from "path";
import * as webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackRootPlugin from "html-webpack-root-plugin";
import AppManifestWebpackPlugin from "app-manifest-webpack-plugin";
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
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
    new AppManifestWebpackPlugin({
      logo: path.join(__dirname, "..", "..", "resources", "icons", "water.png"),
      statsFilename: "iconstats.json",
      output: "./",
    }),
    new HTMLWebpackRootPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
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
