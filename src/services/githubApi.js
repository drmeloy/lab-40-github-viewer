export const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        id,
        username: data.login,
        name,
        company,
        location,
        email,
        bio,
        numRepos: data.public_repos,
        img: data.avatar_url,
        url: data.html_url,
        numFollowers: data.followers,
        numFollowing: data.following,
        followers_url,
        following_url,
        repos_url,
        organizations_url
      }
    });
};
