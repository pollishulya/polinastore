import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Main";
import About from "./About";
import Admin from "./Admin";
import Create from "./Create";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
