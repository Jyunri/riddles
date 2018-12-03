import {
  SHOW_ANSWERED_QUESTIONS,
} from '../actions/types';

export const showAnsweredQuestionsModal = (show) => {
  return {
    type: SHOW_ANSWERED_QUESTIONS,
    payload: show
  };
};

