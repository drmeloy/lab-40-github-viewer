import { isLoadingRepos, selectRepos } from './repoSelectors';

describe('repo selectors', () => {
  it('selects repo loading state', () => {
    const state = {
      repos: { 
        loading: true,
        repos: [] 
      }
    };
    const loading = isLoadingRepos(state);
    expect(loading).toEqual(true);
  });

  it('selects repos from state', () => {
    const state = {
      repos: {
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
      }
    };
    const repos = selectRepos(state);
    expect(repos).toEqual([
      {
        name: 'Mega repo',
        description: 'Super mega'
      },
      {
        name: 'Super repo',
        description: 'Mega super'
      }
    ]);
  });
});
