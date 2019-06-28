import { combineReducers } from 'redux';
import decks from './ducks/decks';

// Redux combines the reducers together
export default combineReducers({
  decks
});
