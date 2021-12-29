import React from 'react';
import styles from './Selector.module.scss';

const Selector = (props) => {
  const {getSelectorValue} = props;
  return (
    <select className={styles.select} onChange={getSelectorValue}>
      <option value="all">All</option>
      <option value="done">Only done</option>
      <option value="current">Only current</option>
    </select>
  );
}

export default Selector;

