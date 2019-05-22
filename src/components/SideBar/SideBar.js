import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

import {
  Content,
  List,
  Container,
  Thumbnail,
  Text,
} from 'native-base';

import MenuGuide from './MenuList';
import MenuItem from './MenuItem';

import storage from '../../utils/storage';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
    };

    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(menu) {
    menu.route === 'LoginScreen' ?
      storage.clear().then(() => this.props.navigation.navigate('Auth')) :
      this.props.navigation.navigate(menu.route);
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: 25 }}
        >
          <List
            dataArray={MenuList}
            renderRow={(menu) => <MenuItem menu={menu} menuClick={this.menuClick} />}>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileName: {
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  }
})