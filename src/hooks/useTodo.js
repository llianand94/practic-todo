import React, { useState } from 'react';

const useTodo = (initialValues) => {
  const [tasks, setTasks] = useState([...initialValues]);
  return {
    tasks,
    setTasks,
    addTasks: (values)=>{
      const newTask={
        id: Date.now(),
        body: values.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    setDone: (id)=>{
      setTasks(tasks.map((item)=>{
        if(id===item.id){
          return {...item, isDone: !item.isDone }
        }
        return {...item}
      }))
    },
    deleteTask: (id)=>{
      setTasks(tasks.filter((item)=> id!==item.id))
      
    },
  }
    
  ;
}

export default useTodo;
