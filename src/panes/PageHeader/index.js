import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './styles.css';

class PageHeader extends React.Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <h3 className={styles.logo}>Tricky</h3>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={styles.active}>Root@Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/home" activeClassName={styles.active}>Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName={styles.active}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default PageHeader;
