import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import RepoList from '../repoList/RepoList';
import PrList from '../prList/PrList';
import IssueList from '../issueList/IssueList';
import styles from './GithubViewer.css';

export default function GithubViewer(){
  return (
    <>
      <SearchForm />
      <div className={styles.RepoSection}>
        <RepoList />
        <div className={styles.RepoInfo}>
          <PrList />
          <IssueList />
        </div>
      </div>
    </>
  );
}
