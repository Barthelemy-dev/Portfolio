import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //wrap App with React.StrictMode before router
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
