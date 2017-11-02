import React from 'react';

import PageHeader from '../../panes/PageHeader';
import styles from './home.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <PageHeader />
        <main>
          <h3>Welcome to the Game</h3>
        </main>
      </div>
    );
  }
}

export default HomePage;