import { createStackNavigator } from 'react-navigation';
import NewDeckScreen from '../screens/NewDeckScreen';

const NewDeckStack = createStackNavigator({
  newScreen: {
    screen: NewDeckScreen
  }
});

export default NewDeckStack;
