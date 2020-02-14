export const getUser = username  => {
  return Promise.resolve({
    id: 1,
    name: 'Megaman',
  });
};

export const getPrs = url => {
  return Promise.resolve([
    {
      prName: 'Megaman codez',
      date: 'December 24th'
    },
    {
      prName: 'Eggman defeated',
      date: 'December 25th'
    }
  ]);
};
