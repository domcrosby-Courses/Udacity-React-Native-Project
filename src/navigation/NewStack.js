import { createStackNavigator } from 'react-navigation';
import NewScreen from '../screens/NewScreen';

const NewStack = createStackNavigator({
  newScreen: {
    screen: NewScreen
  }
});

export default NewStack;
