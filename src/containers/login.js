import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import actions from 'redux-auto';

// const propTypes = {
//
// };

const mapStateToProps = (state, props) => {
  return {
    name: state.user.name
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleLogin: (name, password) => {
      dispatch(actions.user.login({name, password}));
    }
  };
};

const loginContainer = connect(mapStateToProps, mapDispatchToProps);

export default loginContainer;
