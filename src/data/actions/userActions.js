import { getUser } from '../../services/githubAPI';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = username => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getUser(username)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
