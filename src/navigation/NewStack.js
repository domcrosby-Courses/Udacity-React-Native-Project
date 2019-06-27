import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NewScreen from '../screens/NewScreen';
import { TabBarIcon } from '../Components';

const NewStack = createStackNavigator({
  Home: NewScreen
});

NewStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle'}
    />
  )
};

export default NewStack;
