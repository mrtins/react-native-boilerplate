import React, { Component } from 'react';

import {
  Container,
  Body,
  Spinner
} from 'native-base';

import storage from '../utils/storage';

export default class LoadingScreen extends Component {
  componentDidMount() {
    storage.getItem('logged').then(item => {
      if (item)
        return this.props.navigation.navigate('App');
      else
        return this.props.navigation.navigate('Auth');
    });
  }

  render() {
    return (
      <Container>
        <Body>
          <Spinner
            color='blue'
            style={{ flex: 1, alignSelf: 'center' }}
          />
        </Body>
      </Container>
    );
  }
}