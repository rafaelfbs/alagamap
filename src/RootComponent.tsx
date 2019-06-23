import { CssBaseline } from "@material-ui/core";
import { I18n } from "aws-amplify";
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
  button: {
    backgroundColor: "#00b3f9",
  },
  a: {
    color: "#00b3f9",
  },
};

const SignUpConfig = {
  signUpFields: [
    { key: "username", label: "Email", required: true, type: "email", displayOrder: 1 },
    { key: "password", label: "Password", required: true, type: "password", displayOrder: 2 },
  ],
  hiddenDefaults: ["email", "phone_number"],
};

const Federated = {
  google_client_id: "2485111233-lfvitl2nelrtbkfm0h8aft67q536vs2e.apps.googleusercontent.com",
};

I18n.setLanguage("pt");
I18n.putVocabularies({
  pt: {
    or: "ou",
    "Sign in to your account": "Entre com sua conta",
    "Sign in with AWS": "Entrar com Rede Social",
    Username: "Email",
    Password: "Senha",
    "Enter your username": "Informe seu email",
    "Enter your password": "Informe sua senha",
    "Forget your password? ": "Esqueceu sua senha? ",
    "Reset password": "Recuperar senha",
    "Reset your password": "Recupere sua senha",
    "Send Code": "Enviar código",
    "Back to Sign In": "Voltar ao Login",
    "No account? ": "Sem conta? ",
    "Create account": "Criar conta",
    "Create a new account": "Criar uma nova conta",
    "Create Account": "Criar Conta",
    "Have an account? ": "Possui uma conta? ",
    "Sign in": "Entrar",
    "Sign In": "Entrar",
    "Confirm Sign Up": "Confirmar Cadastro",
    "Confirmation Code": "Código de Confirmação",
    "Enter your code": "Informe seu código",
    "Lost your code? ": "Perdeu seu código? ",
    "Resend Code": "Reenviar Código",
    Confirm: "Confirmar",
  },
});

const RootComponentBase = () => (
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  <ApolloProvider client={client as any}>
    <Rehydrated>
      <React.Fragment>
        <CssBaseline />
        <Authenticator
          amplifyConfig={config}
          theme={AuthenticatorTheme}
          hide={[Greetings]}
          signUpConfig={SignUpConfig}
        >
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
