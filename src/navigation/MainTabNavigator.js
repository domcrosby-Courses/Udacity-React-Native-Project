import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from '../Components';

import DecksStack from './DecksStack';
import NewStack from './NewStack';

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
    screen: NewStack,
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
