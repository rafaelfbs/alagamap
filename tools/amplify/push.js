const { spawn } = require("child_process");
const { overwrite } = require("./util");

const AUTH_PARAMETERS_PATH = "./amplify/backend/auth/cognito6170dcc7/parameters.json";
const API_PARAMETERS_PATH = "./amplify/backend/api/alagamap/parameters.json";

const authParams = overwrite(AUTH_PARAMETERS_PATH, data => ({
  ...data,
  googleAppIdUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
  googleAppSecretUserPool: process.env.GOOGLE_CREDENTIALS_CLIENT_SECRET,
}));

const apiParams = overwrite(API_PARAMETERS_PATH, data => ({
  ...data,
  OneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
  OneSignalRestKey: process.env.ONE_SIGNAL_REST_KEY,
}));

const amplifyPush = spawn("amplifyPush --simple", {
  stdio: "inherit",
  shell: true,
});

amplifyPush.on("close", code => {
  apiParams();
  authParams();

  process.exit(code);
});
