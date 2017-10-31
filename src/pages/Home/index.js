import React from 'react';

import styles from './home.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.home} >
        <header>
          <h3>Tricky</h3>
        </header>
        <main>
          <h3>Welcome to the Game</h3>
        </main>
      </div>
    )
  }
}

export default HomePage;