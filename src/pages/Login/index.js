import React from 'react';
import {Link} from 'react-router-dom';

import OrigLoginForm from 'components/LoginForm';
import loginContainer from 'containers/login';

import styles from './styles.css';

const LoginForm = loginContainer(OrigLoginForm);

class LoginPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <header>
            <h3>Please Login</h3>
          </header>
          <section className={styles.formWrapper}>
            <LoginForm />
          </section>
          <footer>
            <Link to="/">Return to Home Page</Link>
          </footer>
        </div>
      </div>
    );
  }
}

export default LoginPage;
