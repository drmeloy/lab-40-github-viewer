export const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        username: data.login,
        name: data.name,
        company: data.company,
        location: data.location,
        email: data.email,
        bio: data.bio,
        numRepos: data.public_repos,
        img: data.avatar_url,
        url: data.html_url,
        numFollowers: data.followers,
        numFollowing: data.following,
        repos_url: data.repos_url
      };
    });
};

export const getRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url
      }));
    });
};

export const getPrs = url => {
  return fetch(url)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        id: data.id,
        title: data.title,
        state: data.state,
        url: data.html_url
      };
    });
};

export const getIssues = url => {
  return fetch(url)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        id: data.id,
        title: data.title,
        state: data.state,
        url: data.html_url
      };
    });
};
