import * as webpack from "webpack";

const env = process.env.NODE_ENV || "development";
const envConfig = require(`./${env}.webpack.config`).default as webpack.Configuration;

export default envConfig;
