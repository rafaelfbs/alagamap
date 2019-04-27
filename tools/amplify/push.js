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

function escape(p) {
  return `${p.replace(/"/g, "\\\"")}`;
}
async function main() {
  const config = {
    configLevel: "project",
    useProfile: true,
    profileName: "default",
  };
  const ENV = process.env.ENV || "dev";
  const STACKINFO = process.env.STACKINFO;
  const AWSCONFIG = JSON.stringify(config);
  const AMPLIFY = JSON.stringify({
    envName: ENV,
  });
  const PROVIDERS = JSON.stringify({
    awscloudformation: config,
  });
  try {
    if (!process.env.STACKINFO) {
      console.log(`# Initializing new Amplify environment: ${ENV} (amplify init)`);
      await exec(`amplify init --amplify ${escape(AMPLIFY)} --providers ${escape(PROVIDERS)} --yes`);
      console.log(`# Environment ${ENV} details:`);
      await exec(`amplify env get --name ${ENV}`);
    } else {
      console.log(`# Importing Amplify environment: ${ENV} (amplify env add)`);
      await exec(
        `amplify env add --name ${ENV} --config ${escape(STACKINFO)} --awsInfo ${escape(AWSCONFIG)} --yes`,
      );
      console.log(`# Initializing existing Amplify environment: ${ENV} (amplify init)`);
      await exec(`amplify init --amplify ${escape(AMPLIFY)} --providers ${escape(PROVIDERS)} --yes`);
      console.log(`# Environment ${ENV} details:`);
      await exec(`amplify env get --name ${ENV}`);
    }

    console.log(`# Done initializing Amplify environment: ${ENV}`);
    restoreParams();
  } catch (code) {
    restoreParams();
    process.exit(code);
  }
}

main();
