import { isLoadingPrs, selectPrs } from './prSelectors';

describe('pr selectors', () => {
  it('selects the pr loading state', () => {
    const state = {
      prs: {
        loading: true,
        prs: []
      }
    };
    const loading = isLoadingPrs(state);
    expect(loading).toEqual(true);
  });

  it('selects the prs from state', () => {
    const state = {
      prs: {
        loading: false,
        prs: [
          {
            prName: 'Megaman codez',
            date: 'December 24th'
          },
          {
            prName: 'Eggman defeated',
            date: 'December 25th'
          }
        ] } };
    const prs = selectPrs(state);
    expect(prs).toEqual([
      {
        prName: 'Megaman codez',
        date: 'December 24th'
      },
      {
        prName: 'Eggman defeated',
        date: 'December 25th'
      }
    ]);
  });
});
