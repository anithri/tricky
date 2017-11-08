import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './Home';
import AboutPage from './About';
import LoginPage from './Login';
import ErrorPage from './Error';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default Routes;
