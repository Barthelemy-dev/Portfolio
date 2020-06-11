import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./component/Index";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./component/About";

import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Fragment>
  );
}

export default App;
