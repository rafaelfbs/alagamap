import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import { RootComponent } from "./RootComponent";

import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

ReactDOM.render(
  React.createElement(hot(withAuthenticator(RootComponent, true)) as React.ReactType),
  document.getElementById("root"),
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered:", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed:", registrationError);
      });
  });
}
