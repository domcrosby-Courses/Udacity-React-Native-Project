import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NewScreen from '../screens/NewScreen';
import { TabBarIcon } from '../Components';

const NewStack = createStackNavigator({
  newScreen: {
    screen: NewScreen
  }
});

export default NewStack;
