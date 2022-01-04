import React from 'react';
import styles from './Selector.module.scss';

const Selector = (props) => {
  const {selectorTasksAction} = props;
  return (
    <select className={styles.select} onChange={selectorTasksAction}>
      <option value="all">All</option>
      <option value="done">Only done</option>
      <option value="current">Only current</option>
    </select>
  );
}

export default Selector;

