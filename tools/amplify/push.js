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
  const ENV = process.env.ENV || "dev";
  const STACKINFO = process.env.STACKINFO;
  const AWSCONFIG = JSON.stringify({
    configLevel: "project",
    useProfile: true,
    profileName: "default",
  });
  const AMPLIFY = JSON.stringify({
    envName: ENV,
  });
  const PROVIDERS = JSON.stringify({
    awscloudformation: AWSCONFIG,
  });
  try {
    if (!process.env.STACKINFO) {
      console.log(`# Initializing new Amplify environment: ${ENV} (amplify init)`);
      await exec(`amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes`);
      console.log(`# Environment ${ENV} details:`);
      await exec(`amplify env get --name ${ENV}`);
    } else {
      console.log(`# Importing Amplify environment: ${ENV} (amplify env add)`);
      await exec(
        `amplify env add --name ${ENV} --config "${STACKINFO}" --awsInfo ${AWSCONFIG} --yes`,
      );
      console.log(`# Initializing existing Amplify environment: ${ENV} (amplify init)`);
      await exec(`amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes`);
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
