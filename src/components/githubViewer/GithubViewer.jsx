import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import RepoList from '../repoList/RepoList';

export default function GithubViewer(){
  return (
    <>
      <SearchForm />
      <RepoList />
    </>
  );
}
