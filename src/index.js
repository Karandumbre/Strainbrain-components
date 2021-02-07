import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import Themes from "./themes";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <ThemeProvider theme={Themes}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
