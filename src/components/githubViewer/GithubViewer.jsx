import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import RepoList from '../repoList/RepoList';
import PrList from '../prList/PrList';
import IssueList from '../issueList/IssueList';

export default function GithubViewer(){
  return (
    <>
      <SearchForm />
      <RepoList />
      <PrList />
      <IssueList />
    </>
  );
}
