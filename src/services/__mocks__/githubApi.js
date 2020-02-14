export const getUser = username  => {
  return Promise.resolve({
    id: 1,
    name: 'Megaman',
  });
};

export const getRepos = url => {
  return Promise.resolve([
    {
      name: 'Mega repo',
      description: 'Super mega'
    },
    {
      name: 'Super repo',
      description: 'Mega super'
    }
  ]);
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

export const getIssues = url => {
  return Promise.resolve([
    {
      name: 'A huge issue'
    },
    {
      name: 'The biggest issue'
    }
  ]);
};
