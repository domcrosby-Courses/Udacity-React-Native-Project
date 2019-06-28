import { createStackNavigator } from 'react-navigation';
import DecksScreen from '../screens/DecksScreen';
import DeckScreen from '../screens/DeckScreen';
import QuizScreen from '../screens/QuizScreen';

const DecksStack = createStackNavigator({
  decksScreen: {
    screen: DecksScreen
  },
  deckScreen: {
    screen: DeckScreen
  },
  quizScreen: {
    screen: QuizScreen
  }
});

export default DecksStack;
