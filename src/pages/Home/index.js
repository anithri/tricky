import React from 'react';

import PageHeader from '../../panes/PageHeader';
import styles from './styles.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageHeader />
        <main>
          <h3>Welcome to the party, pal!</h3>
        </main>
      </div>
    );
  }
}

export default HomePage;
