import { FETCH_REPOS_LOADING, FETCH_REPOS } from '../actions/repoActions';
import repoReducer from './repoReducer';

describe('repo reducer', () => {
  it('handles a fetch repo loading action', () => {
    const action = { type: FETCH_REPOS_LOADING };
    const initialState = {
      loading: false,
      repos: []
    };
    const newState = repoReducer(initialState, action);
    expect(newState).toEqual({ loading: true, repos: [] });
  });

  it('handles a fetch repos action', () => {
    const action = { 
      type: FETCH_REPOS,
      payload: [
        {
          name: 'Mega repo',
          description: 'Super mega'
        },
        {
          name: 'Super repo',
          description: 'Mega super'
        }
      ]
    };
    const initialState = {
      loading: true,
      repos: []
    };
    const newState = repoReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      repos: [
        {
          name: 'Mega repo',
          description: 'Super mega'
        },
        {
          name: 'Super repo',
          description: 'Mega super'
        }
      ]
    });
  });
});
