import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.css';

class Button extends React.Component {
  render() {
    const {children, theme, size} = this.props;
    const classes = cx(styles.button, styles.success, 'dim');
    return (
      <input type="button" value={children} className={classes} onClick={() => console.log('clicked')} />
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
