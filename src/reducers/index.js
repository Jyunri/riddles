import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer'
import ProfileReducer from './ProfileReducer'

export default combineReducers({
  FeedReducer: FeedReducer,
  ProfileReducer: ProfileReducer,
});
