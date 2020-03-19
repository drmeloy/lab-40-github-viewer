import { isLoadingUser, selectUser } from './userSelectors';

describe('user selectors', () => {
  it('selects the user loading state', () => {
    const state = {
      user: {
        loading: true,
        user: null
      }
    };
    const loading = isLoadingUser(state);
    expect(loading).toEqual(true);
  });

  it('selects the user from state', () => {
    const state = {
      user: {
        loading: false,
        user: {
          id: 1,
          name: 'Megaman'
        }
      }
    };
    const user = selectUser(state);
    expect(user).toEqual({
      id: 1,
      name: 'Megaman'
    });
  });
});
