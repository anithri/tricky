import React from 'react';
import PropTypes from 'prop-types';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { auto, reducers } from 'redux-auto';
import { Provider } from 'react-redux';

const webpackModules = require.context("./store", true, /^.*\.js$/);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

class Store extends React.Component {
  state = {};

  componentWillMount() {
    const enhancer = composeEnhancers(
      applyMiddleware(auto(webpackModules, webpackModules.keys()))
    );
    const store = createStore(combineReducers(reducers), enhancer);

    this.setState({store});
  }

  render() {
    return (
      <Provider store={this.state.store}>
        {this.props.children}
      </Provider>
    );
  }
}

Store.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Store;
