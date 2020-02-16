import { getPrs } from '../../services/githubAPI';

export const FETCH_PRS_LOADING = 'FETCH_PRS_LOADING';
export const FETCH_PRS = 'FETCH_PRS';
export const fetchPrs = repo => dispatch => {
  dispatch({ type: FETCH_PRS_LOADING });
  return getPrs(repo)
    .then(prs => dispatch({
      type: FETCH_PRS,
      payload: prs
    }));
};
