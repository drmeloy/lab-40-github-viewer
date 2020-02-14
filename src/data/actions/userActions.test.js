import { FETCH_USER_LOADING, fetchUser, FETCH_USER } from './userActions';

jest.mock('../../services/githubAPI.js');

describe('user actions', () => {
  it('creates a getUser action', () => {
    const dispatch = jest.fn();
    const action = fetchUser('username');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith(({
          type: FETCH_USER_LOADING
        }));
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER,
          payload: {
            id: 1,
            name: 'Megaman'
          }
        })
        
      })
  });
});
