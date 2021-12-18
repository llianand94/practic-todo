import React, { useState, useReducer } from 'react';
import reducer from './reducer';
import actionsList from './actionsList';


const initialValues= [{
      id: Date.now(),
      body: '',
      isDone: false
    }];
// const useTodo = () => {
//   const [tasks, setTasks] = useState([{
//     id: Date.now(),
//     body: null,
//     isDone: false
//   }]);
//   return {
//     tasks,
//     setTasks,
//     addTasks: (values)=>{
//       const newTask={
//         id: Date.now(),
//         body: values.body,
//         isDone: false,
//       };
//       setTasks([...tasks, newTask]);
//     },
//     setDone: (id)=>{
//       setTasks(tasks.map((item)=>{
//         if(id===item.id){
//           return {...item, isDone: !item.isDone }
//         }
//         return {...item}
//       }))
//     },
//     deleteTask: (id)=>{
//       setTasks(tasks.filter((item)=> id!==item.id))
      
//     },
//   };
// }

const useTodo = () => {
  const [tasks, dispatch] = useReducer(reducer, initialValues);
  
  return {
    tasks,
    addTasksAction:({body})=>dispatch({type:actionsList.ADD_TASKS, value:body}),
    setDoneAction: (id)=>    dispatch({type:actionsList.SET_DONE, id}),
    deleteTaskAction: (id)=> dispatch({type:actionsList.DELETE_TASK, id}), 
    fiterTasksAction: ({target}) =>dispatch({type:actionsList.FILTER_TASKS, value:target.value })
  }
}
export default useTodo;
