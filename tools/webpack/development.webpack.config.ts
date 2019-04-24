/* eslint-disable @typescript-eslint/camelcase */
import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackRootPlugin from "html-webpack-root-plugin";
import * as path from "path";
import * as webpack from "webpack";
import { GenerateSW } from "workbox-webpack-plugin";
import jimpAdapter from "./loaders/responsive-loader/jimp-adapter";
import { ManifestPlugin } from "./plugins/manifest";
import { OneSignalPlugin } from "./plugins/one-signal";

export default <webpack.Configuration>{
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.USE_SERVICE_WORKER": "false",
    }),
    new HTMLWebpackPlugin({
      lang: "pt-br",
      dir: "ltr",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      template: path.resolve("./resources/template/index.ejs"),
    }),
    new ManifestPlugin({
      logo: path.resolve("./resources/icons/water.png"),
      appName: "AlagaMAP",
      appShortName: "AlagaMAP",
      extraParameters: {
        gcm_sender_id_comment: "For OneSignal Web Push Notifications, Do Not Change ID",
        gcm_sender_id: "482941778795",
      },
    }),
    new HTMLWebpackRootPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cacheId: "AlagaMAP",
      navigateFallback: "index.html",
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/],
    }),
    new OneSignalPlugin({
      appId: "27264849-3ec1-40d4-b82d-7de37f3f4819",
      sdkFilePaths: [
        path.resolve("./resources/scripts/OneSignalSDKUpdaterWorker.js"),
        path.resolve("./resources/scripts/OneSignalSDKWorker.js"),
      ],
      injectManifest: false,
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
  devServer: {
    https: {
      pfx: path.join(__dirname, "..", "certificates", "localhost.pfx"),
      passphrase: "YourPassword",
    },
    hot: true,
    host: "0.0.0.0",
    port: 443,
    historyApiFallback: true,
    overlay: true,
  },
};
