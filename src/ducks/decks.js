import initialState from '../utils/initialState';

// Enter actions here
const ADD_DECK = 'add_deck';

// Set initial state
const INITIAL_STATE = initialState;

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_DECK:
      // make new object - you can't keep the old
      return { ...state, decks: ' new deck ' };
    default:
      return state;
  }
}

// Action Creators
export function addDeck(text) {
  return {
    type: ADD_DECK,
    payload: text
  };
}
