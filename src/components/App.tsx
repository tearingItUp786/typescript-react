import React from "react";
import { hot } from "react-hot-loader";
import Hello from "./Hello";
import Test from "./Test";
import "../sass/index.scss";

const App = () => (
  <div>
    <Test name="A name cool like Ehren or Chris or Nikki" />
    <Hello compiler="TypeScript" framework="React is the shit" />,
  </div>
);

export default hot(module)(App);
