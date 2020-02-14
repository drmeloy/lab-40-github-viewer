import { areIssuesLoading, selectIssues } from './issueSelectors';

describe('issues selectors', () => {
  it('can select issue loading state', () => {
    const state = {
      issues: { loading: true, issues: [] }
    };
    const loading = areIssuesLoading(state);
    expect(loading).toEqual(true);
  });

  it('can select issues from state', () => {
    const state = {
      issues: {
        loading: false,
        issues: [
          {
            name: 'A huge issue'
          },
          {
            name: 'The biggest issue'
          }
        ]
      }
    };
    const issues = selectIssues(state);
    expect(issues).toEqual([
      {
        name: 'A huge issue'
      },
      {
        name: 'The biggest issue'
      }
    ]);
  });
});
