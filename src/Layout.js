import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'typography';
import {Helmet} from 'react-helmet';
import funstonTheme from 'typography-theme-funston';
import parnassusTheme from 'typography-theme-parnassus'
import {TypographyStyle, GoogleFont} from 'react-typography';

import './styles/app.css';

const typography = new Typography(funstonTheme);
// const typography = new Typography(parnassusTheme)

class Layout extends React.Component {
  render() {
    console.log('Rendering Layout')
    return (
      <div id="appWrapper">
        <Helmet>
          <title>Wooticus Prime!</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;