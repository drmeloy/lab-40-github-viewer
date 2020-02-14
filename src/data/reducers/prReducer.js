import { FETCH_PRS_LOADING } from '../actions/prActions';

const initialState = [];

export default function prReducer(state = initialState, action){
  switch(action.type){
    case FETCH_PRS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
