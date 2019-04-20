import * as webpack from "webpack";

export default (env: string = "development") => (
  require(`./${env}.webpack.config`).default as webpack.Configuration
);
