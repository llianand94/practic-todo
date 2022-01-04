import React from "react";
import actionsList from "../actions/actionsList";

const reducer = (tasks, action) => {
  const { type, value, id } = action;
  switch (type) {
    case actionsList.ADD_TASKS: {
      const newTask = {
        id: Date.now(),
        body: value,
        isDone: false,
        isDelete: false
      };
      return [...tasks, newTask];
    }
    case actionsList.SET_DONE: {
      const newTasks = tasks.map((item) => {
        if (id === item.id) {
          return { ...item, isDone: !item.isDone };
        }
        return { ...item };
      });
      return newTasks;
    }
    case actionsList.DELETE_TASK: {
      const newTasks = tasks.map((item)=>({...item, isDelete:!item.isDelete})).filter((item) => id !== item.id);
      return newTasks;
    }
    default:
      return tasks;
  }
};

export default reducer;
