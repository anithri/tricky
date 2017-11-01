import React from 'react';
import Pages from './pages';
import Layout from './Layout';

// Responsible for wiring store and router
class App extends React.Component {
  render() {
    console.log('rendering App');
    return (
      <Layout>
        <Pages />
      </Layout>
    );
  }
}

export default App;
