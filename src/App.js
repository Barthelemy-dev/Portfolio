import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
// import MainGithub from "./component/github/MainGithub";
import LoanCalculator from "./pages/LoanCalculator";
import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/loan-calculator" component={LoanCalculator} />
      {/* <Route exact path="/github-finder" component={MainGithub} /> */}
    </Fragment>
  );
}

export default App;
