import React, { useRef } from 'react';
import styles from './TodoList.module.scss'

const TodoList = (props) => {
  const {tasks, deleteTask, setDone} = props;
  return (
    <ol className={styles.container}>
        {tasks.map((elem)=>{
          if(elem.body){
            return <div className={styles.itemWrapper}>
            <li className={styles.item} key={elem.id}>{elem.body}</li>
            <button className={styles.condition} onClick={()=>setDone(elem.id)}>{elem.isDone?'DONE':'To do'}</button>
            <button className={styles.delete} 
                    onClick={()=>deleteTask(elem.id)}>Trash</button>
            </div>
          
            }
            return null;
          }
          )}
      </ol>
  );
}

export default TodoList;
