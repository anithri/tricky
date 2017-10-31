


// load the folder that hold you store
const webpackModules = require.context(".", true, /\.js$/);

// build 'auto' based on target files via Webpack
const middleware = applyMiddleware( auto(webpackModules, webpackModules.keys()))
const store = createStore(combineReducers(reducers), middleware );

export default function() {
  return store;
}


import { applyMiddleware, compose, createStore } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'react-router-redux'
import { auto, reducers } from 'redux-auto';
import createHistory from 'history/createBrowserHistory'

import makeRootReducer from 'store/reducers'
import makeRootSaga from 'store/sagas'

export const APP_HISTORY = createHistory()

export default (initialState = {}) => {
  const rootSaga = makeRootSaga()

  const middleware = [rootSaga.middleware,apiMiddleware,routerMiddleware(APP_HISTORY)]

  const enhancers = []

  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  rootSaga.run()
  return store
}
