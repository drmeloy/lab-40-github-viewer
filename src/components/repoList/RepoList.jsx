import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRepos } from '../../data/selectors/repoSelectors';
import styles from './RepoList.css';
import { fetchPrs } from '../../data/actions/prActions';
import { fetchIssues } from '../../data/actions/issueActions';

export default function RepoList(){
  const state = useSelector(state => state);
  const repos = selectRepos(state);
  const dispatch = useDispatch();

  const handleClick = repo => {
    dispatch(fetchPrs(repo));
    dispatch(fetchIssues(repo));
  };

  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <div>
        <h3>{repo.name}</h3>
        <button onClick={handleClick(repo.name)}>Examine PRs and Issues</button>
      </div>
      <p>{repo.description}</p>
      <a href={repo.url}>{repo.url}</a>
    </li>
  ));

  return (
    <>
      {repoList.length > 0 && 
      <section>
        <h2>Repos:</h2>
        <ul className={styles.RepoList}>
          {repoList}
        </ul> 
      </section>   }
    </>
  );
}
