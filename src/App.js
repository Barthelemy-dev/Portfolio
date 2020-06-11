import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./component/Index";
import About from "./component/About";
import Portfolio from "./component/Portfolio";

import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </Fragment>
  );
}

export default App;
