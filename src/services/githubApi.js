export const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        id: data.id,
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
        followers_url: data.followers_url,
        following_url: data.following_url,
        repos_url: data.repos_url,
        organizations_url: data.organizations_url
      };
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
        name: data.name,
        description: data.description,
        url: data.html_url
      };
    });
};
