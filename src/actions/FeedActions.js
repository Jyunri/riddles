import {
  SET_CURRENT_CREDITS,
  SET_CREATE_QUESTION,
  SET_CURRENT_CARDS,
  SET_NEW_QUESTION,
} from '../actions/types';

export const setCurrentCredits = (credits) => {
  return {
    type: SET_CURRENT_CREDITS,
    payload: credits
  };
};

export const setCreateQuestion = (credits) => {
  return {
    type: SET_CREATE_QUESTION,
    payload: credits
  };
};

export const setCurentCards = (cards) => {
  return {
    type: SET_CURRENT_CARDS,
    payload: cards
  };
};

export const setNewQuestion = (question) => {
  return {
    type: SET_NEW_QUESTION,
    payload: question
  };
};