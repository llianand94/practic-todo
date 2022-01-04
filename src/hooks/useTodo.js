import React, { useState, useReducer } from 'react';
import reducer from '../common/reducer/reducer';
import actionsList from '../common/actions/actionsList';


const initialValues= [{
      id: Date.now(),
      body: '',
      isDone: false
    }];

const useTodo = () => {
  const [tasks, dispatch] = useReducer(reducer, initialValues);
  const [selectorValue, setSelectorValue] = useState('all');
  
  return {
    tasks,
    selectorValue,
    addTasksAction:({body})=>dispatch({type:actionsList.ADD_TASKS, value:body}),
    setDoneAction: (id)=>    dispatch({type:actionsList.SET_DONE, id}),
    deleteTaskAction: (id)=> dispatch({type:actionsList.DELETE_TASK, id}),
    selectorTasksAction: ({target})=>setSelectorValue(target.value) 
  }
}
export default useTodo;
