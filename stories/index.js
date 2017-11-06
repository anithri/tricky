import React from 'react';

import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Skin from '../src/elements/Skin';

import {Welcome} from '@storybook/react/demo';

const styles = {
  textAlign: 'center',
  padding: '64px'
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    {storyFn()}
  </div>
);

addDecorator(CenterDecorator);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('skins', module)
  .add('Info', () => (
    <Skin name="info" />
  ))
  .add('Danger', () => (
    <Skin name="danger" />
  ))
  .add('Success', () => (
    <Skin name="success" />
  ))
  .add('Warning', () => (
    <Skin name="warning" />
  ));
