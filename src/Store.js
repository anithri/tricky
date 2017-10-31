import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { auto, reducers } from 'redux-auto';
import { Provider } from 'react-redux'

const webpackModules = require.context("./store", true, /^.*\.js$/);

class Store extends React.Component {
  state = {};
  componentWillMount() {
    const middleware = applyMiddleware( auto(webpackModules, webpackModules.keys()));
    const store = createStore(combineReducers(reducers), middleware );

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
