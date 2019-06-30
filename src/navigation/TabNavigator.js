/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from '../Components';

import NewDeckScreen from '../screens/NewDeckScreen';
import DecksScreen from '../screens/DecksScreen';

const TabNavigator = createBottomTabNavigator({
  'Your Deck': {
    screen: DecksScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Decks',
      tabBarIcon: ({ focused }) => {
        return (
          <TabBarIcon
            index={0}
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-apps` : 'md-apps'}
          />
        );
      }
    })
  },
  'Add Deck': {
    screen: NewDeckScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Add New',
      tabBarIcon: ({ focused }) => {
        return (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle'
            }
          />
        );
      }
    })
  }
});

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle
  };
};

export default TabNavigator;
