import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import './sass/index.scss';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React is the shit" />,
    document.getElementById("app")
);