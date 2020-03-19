import { combineReducers } from 'redux';
import user from './userReducer';
import repos from './repoReducer';
import prs from './prReducer';
import issues from './issueReducer';

export default combineReducers({
  user,
  repos,
  prs,
  issues
});
