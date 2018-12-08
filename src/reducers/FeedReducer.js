import {
  SET_CURRENT_CREDITS,
  SET_CREATE_QUESTION,
  SET_CURRENT_CARDS,
  SET_NEW_QUESTION,
} from '../actions/types';

const INITIAL_STATE = {
  currentCredits: 10, //TODO: pegar esse cara da base
  createQuestion: false,
  cardIndex: 0,
  currentCards: [],
  newQuestion: ''
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === SET_CURRENT_CREDITS) {
    return { ...state, currentCredits: action.payload };
  }
  if (action.type === SET_CREATE_QUESTION) {
    return { ...state, createQuestion: action.payload };
  }
  if (action.type === SET_CURRENT_CARDS) {
    return { ...state, currentCards: action.payload };
  }
  if (action.type === SET_NEW_QUESTION) {
    return { ...state, newQuestion: action.payload };
  }
  return state;
};
