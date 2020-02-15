import React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos } from '../../data/selectors/repoSelectors';
import User from './User';

export default function RepoList(){
  const state = useSelector(state => state);
  const repos = selectRepos(state);
  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
      <a src={repo.url}>{repo.url}</a>
    </li>
  ));

  return (
    <>
      <User />
      <ul>
        {repoList}
      </ul>
    </>
  );
}
