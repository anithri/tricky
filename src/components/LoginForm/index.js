import React from 'react';
import PropTypes from 'prop-types';

import Button from 'elements/Button';
import styles from './styles.css';

class LoginForm extends React.Component {

  render() {
    return (
      <form noValidate className={styles.form}>
        <div>
          <label htmlFor="email-address">Email *</label>
          <input
            required
            minLength={8}
            type="email"
            name="email-address"
            id="email-address"
          />
        </div>
        <div>
          <label required htmlFor="password">
            Password *
          </label>
          <input
            required
            minLength={8}
            type="password"
            name="password"
            id="password"
            onFocus={()=>{}}
          />
        </div>
        <div className={styles.buttons}>
          <Button>Login</Button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
  name: PropTypes.string.isRequired
};

export default LoginForm;
