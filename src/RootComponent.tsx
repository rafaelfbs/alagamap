import { CssBaseline } from "@material-ui/core";
import { Authenticator, Greetings } from "aws-amplify-react";
import { Rehydrated } from "aws-appsync-react";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { client, config } from "./api";
import { MapManager } from "./modules/map/MapManager";
import { hot } from "react-hot-loader/root";

interface AppProps {
  authState?: string;
  authData?: { username: string };
}

const App = ({ authState, authData }: AppProps) =>
  authState === "signedIn" ? <MapManager loggedInUser={authData.username} /> : <span />;

const AuthenticatorTheme = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
};

const RootComponentBase = () => (
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  <ApolloProvider client={client as any}>
    <Rehydrated>
      <React.Fragment>
        <CssBaseline />
        <Authenticator amplifyConfig={config} theme={AuthenticatorTheme} hide={[Greetings]}>
          <App />
        </Authenticator>
        <style>
          {`
            html, body, #root, .awsappsync.awsappsync--rehydrated {
              height: 100%;
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </React.Fragment>
    </Rehydrated>
  </ApolloProvider>
);

const RootComponent = hot(RootComponentBase);

export { RootComponent };
