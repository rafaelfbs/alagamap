import "typeface-roboto";
import "material-icons";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { RootComponent } from "./RootComponent";

const rootElement = React.createElement(RootComponent);
const container = document.getElementById("root");

ReactDOM.render(rootElement, container);
