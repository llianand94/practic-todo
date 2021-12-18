import React from "react";
import actionsList from "./actionsList";

const reducer = (tasks, action) => {
  console.log("action !! : ", action);
  const { type, value, id } = action;
  switch (type) {
    case actionsList.ADD_TASKS: {
      const newTask = {
        id: Date.now(),
        body: value,
        isDone: false,
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
      const newTasks = tasks.filter((item) => id !== item.id);
      return newTasks;
    }

    case actionsList.FILTER_TASKS: {
      console.log('Enter filter');
      switch (value) {
        case 'done':{
          const newTasks = tasks.filter((item) =>  item.isDone);
        return newTasks;}

        case 'delete':{
          const newTasks = tasks.filter((item) =>  !item.isDone);
        return newTasks;
        }
        default:
          return tasks;
      }
    }

    default:
      return tasks;
  }
};

export default reducer;
