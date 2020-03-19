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
        url: repo.html_url,
        issues: repo.issues_url,
        pulls: repo.pulls_url
      }));
    });
};

export const getPrs = (repo, username) => {
  return fetch(`https://api.github.com/repos/${username}/${repo}/pulls`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(pull => ({
        id: pull.id,
        title: pull.title,
        state: pull.state,
        url: pull.html_url
      }));
    });
};

export const getIssues = (repo, username) => {
  return fetch(`https://api.github.com/repos/${username}/${repo}/issues`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(issue => ({
        id: issue.id,
        title: issue.title,
        state: issue.state,
        url: issue.html_url
      }));
    });
};
