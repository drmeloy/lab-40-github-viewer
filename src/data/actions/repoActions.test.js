import { FETCH_REPOS_LOADING, FETCH_REPOS, fetchRepos } from './repoActions';

jest.mock('../../services/githubAPI.js');

describe('repo actions', () => {
  it('creates a get repos action', () => {
    const dispatch = jest.fn();
    const action = fetchRepos('url');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_REPOS_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
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
        });
      });
  });
});
