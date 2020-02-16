import React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos } from '../../data/selectors/repoSelectors';
import User from './User';
import styles from './RepoList.css';

export default function RepoList(){
  const state = useSelector(state => state);
  const repos = selectRepos(state);
  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.url}>{repo.url}</a>
    </li>
  ));

  return (
    <>
      <User />
      {repoList && <ul className={styles.RepoList}>
        {repoList}
      </ul> }
    </>
  );
}
