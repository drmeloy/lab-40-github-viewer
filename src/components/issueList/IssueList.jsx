import React from 'react';
import { useSelector } from 'react-redux';
import { selectIssues } from '../../data/selectors/issueSelectors';
import styles from './IssueList.css';

export default function IssueList(){
  const state = useSelector(state => state);
  const issues = selectIssues(state);
  
  const issueList = issues.map(issue => (
    <li key={issue.id}>
      <div>
        <h3>{issue.title}</h3>
        <p>{issue.state}</p>
      </div>
      <a href={issue.url}>{issue.url}</a>
    </li>
  ));

  return (
    <>
      {issueList.length > 0 && 
      <section>
        <h2>Issues:</h2>
        <ul className={styles.IssueList}>
          {issueList}
        </ul>
      </section> }
    </>
  );
}
