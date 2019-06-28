import { createStackNavigator } from 'react-navigation';
import DecksScreen from '../screens/DecksScreen';
import DeckScreen from '../screens/DeckScreen';
import QuizScreen from '../screens/QuizScreen';
import NewCardScreen from '../screens/NewCardScreen';

const DecksStack = createStackNavigator({
  decksScreen: {
    screen: DecksScreen
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

export default DecksStack;
