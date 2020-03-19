import { FETCH_ISSUES_LOADING, FETCH_ISSUES } from '../actions/issueActions'
import issueReducer from './issueReducer';

describe('issue reducer', () => {
  it('handles a fetch issues loading action', () => {
    const action = { type: FETCH_ISSUES_LOADING };
    const initialState = {
      loading: false,
      issues: []
    };
    const newState = issueReducer(initialState, action);
    expect(newState).toEqual({ loading: true, issues: [] });
  });

  it('handles a fetch issues action', () => {
    const action = {
      type: FETCH_ISSUES,
      payload: [
        {
          name: 'A huge issue'
        },
        {
          name: 'The biggest issue'
        }
      ]
    };
    const initialState = { loading: true, issues: [] };
    const newState = issueReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      issues: [
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
