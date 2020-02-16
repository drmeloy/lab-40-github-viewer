import { getIssues } from '../../services/githubAPI';

export const FETCH_ISSUES_LOADING = 'FETCH_ISSUES_LOADING';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = repo => dispatch => {
  dispatch({ type: FETCH_ISSUES_LOADING });
  return getIssues(repo)
    .then(issues => dispatch({
      type: FETCH_ISSUES,
      payload: issues
    }));
};
