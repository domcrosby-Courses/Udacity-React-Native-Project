import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import DeckScreen from '../screens/DeckScreen';
import QuizScreen from '../screens/QuizScreen';
import NewCardScreen from '../screens/NewCardScreen';

const MainStack = createStackNavigator({
  decksScreen: {
    screen: TabNavigator
  },
  deckScreen: {
    screen: DeckScreen
  },
  quizScreen: {
    screen: QuizScreen
  },
  newCardScreen: {
    screen: NewCardScreen
  }
});

export default MainStack;
