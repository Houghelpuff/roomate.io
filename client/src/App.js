import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navbar from "./components/nav/Navbar.js";
import Home from "./components/test/Home.js";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
