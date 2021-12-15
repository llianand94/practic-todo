import React from 'react';
import { useTodo } from '../../hooks';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './Todo.module.scss'

const Todo = () => {
  const {tasks, setTasks, addTasks, setDone, deleteTask} = useTodo()

  return (
    
    <div className={styles.container}>
      <h1 className={styles.header}>To-do list</h1>
      <TodoForm  addTasks={addTasks}/>
      {tasks.length>1 && <TodoList tasks={tasks} setDone={setDone} deleteTask={deleteTask}/>}
      
    </div>
  );
}

export default Todo;
