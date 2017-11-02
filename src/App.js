import React from 'react';
import PropTypes from 'prop-types';

// import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import PageRoutes from './pages/Routes';

import Layout from './Layout';

// Responsible for wiring store and router
class App extends React.Component {
  render() {
    console.log('rendering App');
    return (
      <Layout>
        <ConnectedRouter history={this.props.history}>
          <PageRoutes />
        </ConnectedRouter>
      </Layout>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default App;
