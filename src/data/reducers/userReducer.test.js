import { FETCH_USER_LOADING, fetchUser, FETCH_USER } from '../actions/userActions';
import userReducer from './userReducer';

describe('user reducer', () => {
  it('handles a fetch user loading action', () => {
    const action = { type: FETCH_USER_LOADING };
    const initialState = {
      loading: false,
      user: null
    };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual({
      loading: true,
      user: null
    });
  });

  it('handles a fetch user action', () => {
    const action = {
      type: FETCH_USER,
      payload: {
        id: 1,
        name: 'Megaman'
      }
    };
    const initialState = { loading: true, user: null };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      user: {
        id: 1,
        name: 'Megaman'
      }
    });
  });
});
