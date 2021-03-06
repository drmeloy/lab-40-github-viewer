import React from 'react';
import { useSelector } from 'react-redux';
import { selectPrs } from '../../data/selectors/prSelectors';
import styles from './PrList.css';

export default function PrList(){
  const state = useSelector(state => state);
  const prs = selectPrs(state);
  const prList = prs.map(pr => (
    <li key={pr.id}>
      <div>
        <h3>{pr.title}</h3>
        <p>PR status: {pr.state}</p>
      </div>
      <a href={pr.url}>{pr.url}</a>
    </li>
  ));

  return (
    <>
      {prList.length > 0 &&
      <section>
        <h2>PRs:</h2>
        <ul className={styles.PrList}>
          {prList}
        </ul>
      </section> }
    </>
  );
}
