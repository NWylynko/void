import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createGlobalStyle } from "styled-components"

const BaseStyle = createGlobalStyle`

  body, html {

    --background: #E9F1F7;
    --foreground: #131B23;
    --accent: #2274A5;

    margin: 0px;

    background-color: var(--background);
    color: var(--foreground);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--accent);
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <BaseStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
