import React from 'react';

import Store from './Store';
import Pages from './pages';

// Responsible for wiring store and router
class App extends React.Component {
  render() {
    return (
      <Store>
        <Pages />
      </Store>
    );
  }
}

export default App;
