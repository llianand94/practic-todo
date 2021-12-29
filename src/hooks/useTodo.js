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
  
  return {
    tasks,
    addTasksAction:({body})=>dispatch({type:actionsList.ADD_TASKS, value:body}),
    setDoneAction: (id)=>    dispatch({type:actionsList.SET_DONE, id}),
    deleteTaskAction: (id)=> dispatch({type:actionsList.DELETE_TASK, id}), 
    // filterTasksAction: ({target}) =>dispatch({type:actionsList.FILTER_TASKS, value:target.value })
  }
}
export default useTodo;
