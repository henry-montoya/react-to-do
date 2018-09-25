import { TASKS } from "../constants";

const tasksReducer = (state = [], action) => {
  if (action.type === TASKS.LOAD_SUCCESS) {
    return action.tasks;
  }
  return state;
};

export default tasksReducer;
