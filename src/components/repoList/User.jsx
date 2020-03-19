import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../data/selectors/userSelectors';
import styles from './User.css';

export default function User(){
  const state = useSelector(state => state);
  const user = selectUser(state);
  
  if(!user){
    return (
      <p>Input a Github username above to pull up that user&apos;s profile and repositories. </p>
    );
  }

  return (
    <section id='info' className={styles.User}>
      <img src={user.img} alt={`${user.username}'s avatar`} />
      <h1>{user.username}</h1>
      <h2>{user.name} - <a href={user.url}>{user.url}</a></h2>
      <p>{user.company} - {user.location}</p>
      <p>{user.bio}</p>
      <p>Followers: {user.numFollowers} - Following: {user.numFollowing} - Repos: {user.numRepos}</p>
    </section>
  );
}
