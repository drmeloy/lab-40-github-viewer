import { combineReducers } from 'redux';
import user from './userReducer';
import prs from './prReducer';
import issues from './issueReducer';

export default combineReducers({
  user,
  prs,
  issues
});
