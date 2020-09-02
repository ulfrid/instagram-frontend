import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "Pages/Home";
import Login from "Pages/Login";
import Profile from "Pages/Accounts";
import AppLayout from "Components/AppLayout";

class Routes extends React.Component {
  render() {
    return (
      <AppLayout>
        <Router>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/accounts" component={Profile} />
          </Switch>
        </Router>
      </AppLayout>
    );
  }
}

export default Routes;
