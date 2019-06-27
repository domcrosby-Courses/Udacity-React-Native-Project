import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DecksScreen from '../screens/DecksScreen';
import { TabBarIcon } from '../Components';

const DecksStack = createStackNavigator({
  Home: DecksScreen
});

DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-apps` : 'md-apps'} />
  )
};

export default DecksStack;
