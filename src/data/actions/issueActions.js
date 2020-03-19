import { getIssues } from '../../services/githubAPI';

export const FETCH_ISSUES_LOADING = 'FETCH_ISSUES_LOADING';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = (repo, username) => dispatch => {
  dispatch({ type: FETCH_ISSUES_LOADING });
  return getIssues(repo, username)
    .then(issues => dispatch({
      type: FETCH_ISSUES,
      payload: issues
    }));
};
