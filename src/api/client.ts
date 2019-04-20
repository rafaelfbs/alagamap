import { Auth } from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../aws-exports";

export default new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType as AUTH_TYPE,
    jwtToken: async () => {
      const session = await Auth.currentSession();
      return session.getIdToken().getJwtToken();
    },
  },
});
