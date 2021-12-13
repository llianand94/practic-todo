import React from 'react';
import { useTodo } from '../../hooks';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './Todo.module.scss'

const Todo = () => {
  const {tasks, setTasks, addTasks, setDone, deleteTask} = useTodo([{
    id: Date.now(),
    body: 'Empty text of task',
    isDone: false
  }])
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>To-do list</h1>
      <TodoForm  addTasks={addTasks}/>
      <TodoList tasks={tasks} setDone={setDone} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default Todo;
