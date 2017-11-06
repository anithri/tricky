import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import configureStore from './Store';

document.addEventListener('DOMContentLoaded', () => {
  const history = createHistory();
  const store = configureStore(history);
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('appContainer')
  );
});
