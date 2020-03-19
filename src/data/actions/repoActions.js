import { getRepos } from '../../services/githubAPI';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = url => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepos(url)
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
