import { getIssues } from '../../services/githubAPI';

export const FETCH_ISSUES_LOADING = 'FETCH_ISSUES_LOADING';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = url => dispatch => {
  dispatch({ type: FETCH_ISSUES_LOADING });
  return getIssues(url)
    .then(issues => dispatch({
      type: FETCH_ISSUES,
      payload: issues
    }));
};
