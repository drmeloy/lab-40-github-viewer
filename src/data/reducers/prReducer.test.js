import { FETCH_PRS_LOADING, FETCH_PRS } from '../actions/prActions';
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

  it('handles a fetch prs action', () => {
    const action = { type: FETCH_PRS, payload: [
      {
        prName: 'Megaman codez',
        date: 'December 24th'
      },
      {
        prName: 'Eggman defeated',
        date: 'December 25th'
      }
    ] };
    const initialState = { loading: true, prs: [] };
    const newState = prReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      prs: [
        {
          prName: 'Megaman codez',
          date: 'December 24th'
        },
        {
          prName: 'Eggman defeated',
          date: 'December 25th'
        }
      ]
    });
  });
});
