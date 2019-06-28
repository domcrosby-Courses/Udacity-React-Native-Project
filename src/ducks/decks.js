import initialState from '../utils/initialState';

// Enter actions here
const ADD_DECK = 'add_deck';
const ADD_CARD = 'add_card';

// Set initial state
const INITIAL_STATE = initialState;

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_DECK:
      // make new object - you can't keep the old
      return {
        ...state,
        [action.payload.title]: {
          title: action.payload.title,
          quizLength: 0,
          questions: []
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          quizLength: state[action.payload.title].quizLength + 1,
          questions: [
            ...state[action.payload.title].questions,
            {
              question: action.payload.question,
              answer: action.payload.answer
            }
          ]
        }
      };
    default:
      return state;
  }
}

// Action Creators
export function addDeck(payload) {
  return {
    type: ADD_DECK,
    payload
  };
}

export function addCard(payload) {
  return {
    type: ADD_CARD,
    payload
  };
}
