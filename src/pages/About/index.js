import React from 'react';

import styles from './styles.css';
import PageHeader from '../../panes/PageHeader';

class AboutPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageHeader />
        <main>
          <h3>Welcome to the Game</h3>
        </main>
      </div>
    );
  }
}

export default AboutPage;
