import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home";
import Login from "Pages/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
