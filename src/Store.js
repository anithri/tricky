import React from 'react';
import PropTypes from 'prop-types';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {auto, reducers} from 'redux-auto';
import {Provider} from 'react-redux';

const webpackModules = require.context('./store', true, /^.*\.js$/);

const dtx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  (typeof window === 'object' && dtx) ? dtx({name: 'Wooticus Prime'}) : compose;

class Store extends React.Component {
  state = {};

  componentWillMount() {
    console.log('mounting Store');
    const enhancer = composeEnhancers(
      applyMiddleware(auto(webpackModules, webpackModules.keys()))
    );
    const store = createStore(combineReducers(reducers), enhancer);

    this.setState({store});
  }

  render() {
    console.log('Rendering Store', this.state);
    const {store} = this.state;
    return (
      <Provider store={this.state.store}>
        <h1>Oops</h1>
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

function configureStore() {
  console.log('configuring Store');
  const enhancer = composeEnhancers(
    applyMiddleware(auto(webpackModules, webpackModules.keys()))
  );
  return createStore(combineReducers(reducers), enhancer);
}

export default configureStore;
