import { createBottomTabNavigator } from 'react-navigation';

import DecksStack from './DecksStack';
import NewStack from './NewStack';

export default createBottomTabNavigator({
  DecksStack,
  NewStack
});
