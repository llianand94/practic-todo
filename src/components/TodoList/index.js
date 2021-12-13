import React, { useRef } from 'react';
import styles from './TodoList.module.scss'

const TodoList = (props) => {
  const {tasks, deleteTask, setDone} = props;
  return (
    <ul className={styles.container}>
        {tasks.map((elem)=>{
         
          return <li key={elem.id} className={styles.itemWrapper}  >{elem.body}
            <span onClick={()=>setDone(elem.id)}>{elem.isDone?'DONE':'Have to do'}</span>
            <button onClick={()=>deleteTask(elem.id)}>Trash</button>
            </li>
            })}
      </ul>
  );
}

export default TodoList;
