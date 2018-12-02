import {
  SET_CURRENT_CREDITS,
  SET_CREATE_QUESTION
} from '../actions/types';

const INITIAL_STATE = {
  currentCredits: 5, //TODO: pegar esse cara da base
  createQuestion: false,
  cardIndex: 0,
}

export default (state = INITIAL_STATE, action) => {
  if(action.type == SET_CURRENT_CREDITS) {
    return { ...state, currentCredits: action.payload };
  }
  if(action.type == SET_CREATE_QUESTION) {
    return { ...state, createQuestion: action.payload };
  }
  return state;
}
