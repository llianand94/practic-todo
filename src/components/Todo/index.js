import React from 'react';
import { useTodo } from '../../hooks';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './Todo.module.scss'

const Todo = () => {
  const {tasks,  setTasks, addTasksAction, setDoneAction, deleteTaskAction, filterTasksAction} = useTodo();

  
  return (
    
    <div className={styles.container}>
      <h1 className={styles.header}>To-do list</h1>
      <TodoForm  addTasksAction={addTasksAction} filterTasksAction={filterTasksAction}/>
      {/*  */}
      <TodoList tasks={tasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/>
       {/* } */}
      
      
    </div>
  );
}

export default Todo;
