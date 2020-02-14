import { FETCH_PRS_LOADING } from '../actions/prActions';
import prReducer from './prReducer';

describe('pr reducer', () => {
  it('handles a fetch prs loading action', () => {
    const action = { type: FETCH_PRS_LOADING };
    const initialState = {
      loading: false,
      prs: []
    };
    const newState = prReducer(initialState, action);
    expect(newState).toEqual({
      loading: true,
      prs: []
    });
  });
});
