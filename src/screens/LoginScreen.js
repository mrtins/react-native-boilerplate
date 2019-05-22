import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import {
  Container,
} from 'native-base';

import storage from '../utils/storage';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  login = () => {
    storage.setItem('logged', true).then(() => this.props.navigation.navigate('LoadingScreen'));
  }

  render() {
    return (
      <Container>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.login()}
            title='LOGIN'
            raised
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
});
