import { TASKS } from "../constants";

const loadTasks = () => ({
  type: TASKS.LOAD
});

const addTask = tasks => ({
  type: TASKS.ADD,
  tasks
});

const deleteTask = id => ({
  type: TASKS.DELETE,
  id
});

const toggleTask = id => ({
  type: TASKS.TOGGLE,
  id
});

const updateTask = tasks => ({
  type: TASKS.UPDATE,
  tasks
});

const setTasks = tasks => ({
  type: TASKS.LOAD_SUCCESS,
  tasks
});

export { loadTasks, addTask, deleteTask, toggleTask, updateTask, setTasks };
