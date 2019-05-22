import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import SideBar from '../components/SideBar/SideBar';

import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const MainDrawer = {
  HomeScreen: { name: 'Home', screen: HomeScreen },
}

const Drawer = createDrawerNavigator(
  MainDrawer
  ,
  {
    initialRouteName: 'HomeScreen',
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator({
  Drawer: { screen: Drawer },

  HomeScreen: { name: 'Home', screen: HomeScreen },
},
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }
);

const AuthNavigator = createStackNavigator({ LoginScreen: { screen: LoginScreen } });

const SwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'LoadingScreen',
  }
);

export default Navigation = createAppContainer(SwitchNavigator);
