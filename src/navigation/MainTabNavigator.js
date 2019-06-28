/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from '../Components';

import DecksStack from './DecksStack';
import NewDeckStack from './NewDeckStack';

export default createBottomTabNavigator({
  TabOne: {
    screen: DecksStack,
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
  TabTwo: {
    screen: NewDeckStack,
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
