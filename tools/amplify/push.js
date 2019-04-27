const { overwrite, exec } = require("./util");

const API_PARAMETERS_PATH = "./amplify/backend/api/alagamap/parameters.json";

const apiParams = overwrite(API_PARAMETERS_PATH, data => ({
  ...data,
  OneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
  OneSignalRestKey: process.env.ONE_SIGNAL_REST_KEY,
}));

function restoreParams() {
  apiParams();
}

async function main() {
  try {
    await exec("amplify env list");
    await exec(`amplify env checkout ${process.env.USER_BRANCH || "dev"} --restore`);
    await exec("amplify push --yes");
    restoreParams();
  } catch (code) {
    restoreParams();
    process.exit(code);
  }
}

main();
