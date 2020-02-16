import { FETCH_PRS_LOADING, FETCH_PRS } from '../actions/prActions';

const initialState = {
  loading: true,
  prs: []
};

export default function prReducer(state = initialState, action){
  switch(action.type){
    case FETCH_PRS_LOADING:
      return { ...state, loading: true };
    case FETCH_PRS:
      return { ...state, loading: false, prs: action.payload };
    default:
      return state;
  }
}
