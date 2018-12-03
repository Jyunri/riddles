import {
  SHOW_ANSWERED_QUESTIONS,
} from '../actions/types';

const INITIAL_STATE = {
  showAnsweredQuestions: false,
}

export default (state = INITIAL_STATE, action) => {
  if(action.type == SHOW_ANSWERED_QUESTIONS) {
    return { ...state, showAnsweredQuestions: action.payload };
  }
  return state;
}
