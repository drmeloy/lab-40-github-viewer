import { FETCH_ISSUES, FETCH_ISSUES_LOADING, fetchIssues } from './issueActions';

jest.mock('../../services/githubAPI.js');

describe('issue actions', () => {
  it('creates a get issues action', () => {
    const dispatch = jest.fn();
    const action = fetchIssues('url');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_ISSUES_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_ISSUES,
          payload: [
            {
              name: 'A huge issue'
            },
            {
              name: 'The biggest issue'
            }
          ]
        });
      });
  });
});
