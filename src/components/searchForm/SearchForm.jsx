import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../data/actions/userActions';
import { fetchRepos } from '../../data/actions/repoActions';

export default function SearchForm(){
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUserData = () => {
    dispatch(fetchUser(query));
    dispatch(fetchRepos(query));
  };

  return (
    <>
      <h1>Search Github by Github username:</h1>
      <input type='text' placeholder='Github username' onChange={({ target }) => setQuery(target.value)} />
      <button onClick={getUserData} >Search Github</button>
    </>
  );
}
