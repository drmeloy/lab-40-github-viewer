import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../data/selectors/userSelectors';

export default function User(){
  const state = useSelector(state => state);
  const user = selectUser(state);
  
  if(!user){
    return (
      <h1>No user bitch</h1>
    );
  }
  
  return (
    <>
      <section id='info'>
        <img src={user.img} alt={`${user.username}'s avatar`} />
        <h1>{user.username}</h1>
        <h2>{user.name} - {user.email} - {user.url}</h2>
        <p>{user.company} - {user.location}</p>
        <p>{user.bio}</p>
      </section>
      <section id='data'>
        <p>Followers: {user.numFollowers} Following: {user.numFollowing}</p>
        <p>Repos: {user.numRepos} </p>
      </section>
    </>
  );
}
