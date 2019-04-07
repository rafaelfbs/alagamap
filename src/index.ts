import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import { RootComponent } from "./RootComponent";

ReactDOM.render(
  React.createElement(hot(RootComponent) as React.ReactType),
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
