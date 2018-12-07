import {
  SET_CURRENT_CREDITS,
  SET_CREATE_QUESTION,
  SET_CURRENT_CARDS,
} from '../actions/types';

const INITIAL_STATE = {
  currentCredits: 5, //TODO: pegar esse cara da base
  createQuestion: false,
  cardIndex: 0,
  currentCards: []
}

export default (state = INITIAL_STATE, action) => {
  if(action.type == SET_CURRENT_CREDITS) {
    return { ...state, currentCredits: action.payload };
  }
  if(action.type == SET_CREATE_QUESTION) {
    return { ...state, createQuestion: action.payload };
  }
  if(action.type == SET_CURRENT_CARDS) {
    return { ...state, currentCards: action.payload };
  }
  return state;
}
