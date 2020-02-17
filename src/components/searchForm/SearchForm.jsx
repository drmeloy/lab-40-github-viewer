import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../data/actions/userActions';
import { fetchRepos } from '../../data/actions/repoActions';
import User from '../repoList/User';

export default function SearchForm(){
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUserData = event => {
    event.preventDefault();
    dispatch(fetchUser(query));
    dispatch(fetchRepos(query));
  };

  return (
    <>
      <h1>Search Github by Github username:</h1>
      <form onSubmit={getUserData}>
        <input type='text' placeholder='Github username' onChange={({ target }) => setQuery(target.value)} />
        <button>Search Github</button>
      </form>
      <User />
    </>
  );
}
