import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { default as ModalProvider } from "./contexts/Modal";

import "./index.scss";
// import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <div id="recaptcha"></div>
    <App />
  </ModalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
