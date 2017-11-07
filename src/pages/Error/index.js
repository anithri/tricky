import React from 'react';

import PageHeader from '../../panes/PageHeader';
import styles from './styles.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageHeader />
        <main />
      </div>
    );
  }
}

export default HomePage;
