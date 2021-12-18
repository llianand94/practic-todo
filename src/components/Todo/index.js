import React from 'react';
import { useTodo } from '../../hooks';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './Todo.module.scss'

const Todo = () => {
  const {tasks,  setTasks, addTasksAction, setDoneAction, deleteTaskAction, filterTasksAction} = useTodo();

  const easyFunc = (val) =>{console.log('Enter selector', val)
return 2+1;}
  return (
    
    <div className={styles.container}>
      <h1 className={styles.header}>To-do list</h1>
      <TodoForm  addTasksAction={addTasksAction} filterTasksAction={filterTasksAction} easyFunc={easyFunc}/>
      {tasks.length>1 && 
      <TodoList tasks={tasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/> }
      
      
    </div>
  );
}

export default Todo;
