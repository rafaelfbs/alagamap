const { join, dirname } = require("path");
const { exec } = require("./util");

const AMPLIFYDIR = require.resolve("@aws-amplify/cli/package.json");
const AMPLIFYCMD = join(dirname(AMPLIFYDIR), "bin/amplify");

const ENV = process.env.ENV || "dev";

const AWSCLOUDFORMATION = JSON.parse(process.env.CLOUDFORMATIONCONFIG);

const STACKINFO = {
  awscloudformation: AWSCLOUDFORMATION,
  categories: {
    api: {
      alagamap: {
        OneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
        OneSignalRestKey: process.env.ONE_SIGNAL_REST_KEY,
      },
    },
    auth: {
      cognito6170dcc7: {
        hostedUIProviderCreds: JSON.stringify([
          {
            ProviderName: "Google",
            client_id: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
            client_secret: process.env.GOOGLE_CREDENTIALS_CLIENT_SECRET,
          },
        ]),
      },
    },
  },
};

const AWSCONFIG = {
  configLevel: "project",
  useProfile: true,
  profileName: "default",
};

const AMPLIFY = {
  envName: ENV,
};

const PROVIDERS = {
  awscloudformation: AWSCLOUDFORMATION,
};

const CATEGORIES = {
  auth: {
    googleAppIdUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
    googleAppSecretUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_SECRET,
  },
};

function escape(p) {
  return JSON.stringify(JSON.stringify(p));
}

async function main() {
  try {
    console.log(`# Importing Amplify environment: ${ENV} (amplify env import)`);
    await exec(`${AMPLIFYCMD} env import --name ${ENV} --config ${escape(STACKINFO)} --awsInfo ${escape(AWSCONFIG)} --yes`);
    console.log(`# Initializing existing Amplify environment: ${ENV} (amplify init)`);
    await exec(`${AMPLIFYCMD} init --amplify ${escape(AMPLIFY)} --providers ${escape(PROVIDERS)} --categories ${escape(CATEGORIES)} --yes`);
    console.log(`# Environment ${ENV} details:`);
    await exec(`${AMPLIFYCMD} env get --name ${ENV}`);
  } catch (code) {
    process.exit(code);
  }
}

main();
