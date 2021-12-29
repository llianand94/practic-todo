import React from 'react';
import { useTodo } from '../../hooks';
import Selector from '../Selector';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './Todo.module.scss'

const Todo = () => {
  const {tasks,  setTasks, addTasksAction, setDoneAction, deleteTaskAction, 
    // filterTasksAction
  } = useTodo();
  const getSelectorValue = ({target})=>{
    console.log(target.value);
    return toString(target.value)};    
   
  const renderTodoList = (value) =>{
     console.log(value);
    switch (value) {
      case "done":{
        const newTasks = tasks.filter((item) =>  item.isDone);
      return <TodoList tasks={newTasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/>;
      }
      case "current":{
        const newTasks = tasks.filter((item) =>  !item.isDone);
        return <TodoList tasks={newTasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/>;
      }
      default:
        return <TodoList tasks={tasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/>;
    }
   }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>To-do list</h1>
      <div className={styles.wrapper}>
        <TodoForm  addTasksAction={addTasksAction}/>
        <Selector getSelectorValue={getSelectorValue}
        // filterTasksAction={filterTasksAction}
        />
      </div>
      {renderTodoList("all")}
      
      {/* <TodoList tasks={tasks} setDoneAction={setDoneAction} deleteTaskAction={deleteTaskAction}/> */}
    </div>
  );
}

export default Todo;
