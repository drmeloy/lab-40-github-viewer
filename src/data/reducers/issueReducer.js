import { FETCH_ISSUES_LOADING, FETCH_ISSUES } from '../actions/issueActions';

const initialState = {
  loading: true,
  issues: []
};

export default function issueReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ISSUES_LOADING:
      return { ...state, loading: true };
    case FETCH_ISSUES:
      return { ...state, loading: false, issues: action.payload };
    default:
      return state;
  }
}
