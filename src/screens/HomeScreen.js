import tron from 'reactotron-react-native';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {
  Container,
} from 'native-base';

import HeaderBar from '../components/HeaderBar';
import { ScrollView } from 'react-native-gesture-handler';

import storage from '../utils/storage';

export default class HomeScreen extends Component<{}> {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  constructor(props) {
    super(props);
  }

  logout = () => {
    return storage.clear().then(() => this.props.navigation.navigate('Auth'));
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBar navigation={this.props.navigation} title='Home' menu />
        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.logout()}
            title='LOGOUT'
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
