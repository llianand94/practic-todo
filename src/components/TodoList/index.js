import React from 'react';
import styles from './TodoList.module.scss'
import classNames from 'classnames';

const TodoList = (props) => {
  const {tasks, deleteTaskAction, setDoneAction} = props;
  return (
    <ol className={styles.container}>
        {tasks.map((elem, index)=>{
          if(elem.body){
            return (
              <div key={elem.id} className={styles.itemWrapper}>
                <li className={styles.item} >{elem.body}</li>
                <button className={classNames(styles.condition, elem.isDone&&styles['done'])} onClick={()=>setDoneAction(elem.id)}>{elem.isDone?'DONE':'To do'}</button>
                <button className={styles.delete} 
                        onClick={()=>deleteTaskAction(elem.id)}>Trash</button>
              </div>
            )}
          return null;
          }
          )}
      </ol>
  );
}

export default TodoList;
