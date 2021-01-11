import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./FormComponent";
import { WeekProvider } from "./StateContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <WeekProvider>
      <App />
    </WeekProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
