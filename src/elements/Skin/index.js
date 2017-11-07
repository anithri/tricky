import React from 'react';
import PropTypes from 'prop-types';

import mkSkin from '../../utils/skin';

import styles from './styles.css';

const SkinSection = ({name, skin}) => {
  return (
    <div className={styles.wrapper} style={mkSkin(name, skin)}>
      <h3>
        {name} {skin}
      </h3>
    </div>
  );
};

const Skin = ({name}) => {
  return (
    <div>
      <SkinSection name={name} skin="theme" />
      <SkinSection name={name} skin="clear" />
      <SkinSection name={name} skin="dark" />
      <SkinSection name={name} skin="light" />
    </div>
  );
};

Skin.propTypes = {
  name: PropTypes.string.isRequired
};

export default Skin;
