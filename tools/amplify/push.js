const { execSync } = require("child_process");
const { overwrite } = require("./util");

const PARAMETERS_PATH = "./amplify/backend/api/alagamap/parameters.json";
const TEAM_PROVIDER_INFO_PATH = "./amplify/team-provider-info.json";

const params = overwrite(PARAMETERS_PATH, data => ({
  ...data,
  OneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
  OneSignalRestKey: process.env.ONE_SIGNAL_REST_KEY,
}));

const teamProviderInfo = overwrite(TEAM_PROVIDER_INFO_PATH, data => ({
  ...data,
  dev: {
    ...(data.dev || {}),
    categories: {
      ...((data.dev && data.dev.categories) || {}),
      auth: {
        ...((data.dev && data.dev.categories && data.dev.categories.auth) || {}),
        cognito6170dcc7: {
          ...((data.dev &&
            data.dev.categories &&
            data.dev.categories.auth &&
            data.dev.categories.auth.cognito6170dcc7) ||
            {}),
          googleAppIdUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
          googleAppSecretUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_SECRET,
        },
      },
    },
  },
}));

execSync("amplifyPush --simple", { stdio: "inherit" });

teamProviderInfo();
params();
