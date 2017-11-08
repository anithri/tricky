import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../../panes/PageHeader';
import styles from './styles.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <h3>404 Not Found</h3>
          <p>
            <Link to="/">Return to Home Page</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
