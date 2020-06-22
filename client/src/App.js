import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./componets/layout/Navbar";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import ContactState from "./context/contact/contactState";
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
