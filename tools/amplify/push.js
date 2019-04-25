const { execSync } = require("child_process");
const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");

const parametersFilePath = resolve("./amplify/backend/api/alagamap/parameters.json");

const parameters = JSON.parse(readFileSync(parametersFilePath).toString());
const newParameters = {
  ...parameters,
  OneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
  OneSignalRestKey: process.env.ONE_SIGNAL_REST_KEY,
};

writeFileSync(parametersFilePath, JSON.stringify(newParameters, null, 4));

execSync("amplifyPush --simple", { stdio: "inherit" });

writeFileSync(parametersFilePath, JSON.stringify(parameters, null, 4));
