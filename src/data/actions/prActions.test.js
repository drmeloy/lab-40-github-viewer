import { FETCH_PRS_LOADING, FETCH_PRS, fetchPrs } from './prActions';

jest.mock('../../services/githubAPI.js');

describe('pr actions', () => {
  it('creates a get prs action', () => {
    const dispatch = jest.fn();
    const action = fetchPrs('url');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_PRS_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_PRS,
          payload: [
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
});
