import { call, all, put, takeEvery } from "redux-saga/effects";
import {
  getTasks,
  addTask,
  deleteTask,
  toggleComplete,
  updateTask
} from "../services";
import { TASKS } from "../constants";
import { setTasks } from "../actions";

function* handleLoadTasks() {
  try {
    const tasks = yield call(getTasks);
    yield put(setTasks(tasks));
  } catch (error) {
    console.log("error");
  }
}

function* handleAddTask(action) {
  try {
    const tasks = yield call(addTask, action.tasks);
    yield put(setTasks(tasks));
  } catch (error) {
    console.log("error");
  }
}

function* handleDeleteTask(action) {
  try {
    const tasks = yield call(deleteTask, action.id);
    yield put(setTasks(tasks));
  } catch (error) {
    console.log("error");
  }
}

function* handleToggleTask(action) {
  try {
    const tasks = yield call(toggleComplete, action.id);
    yield put(setTasks(tasks));
  } catch (error) {
    console.log("error");
  }
}

function* handleUpdateTask(action) {
  try {
    const tasks = yield call(updateTask, action.tasks);
    yield put(setTasks(tasks));
  } catch (error) {
    console.log("error");
  }
}

//one watcher saga handling traffic for all worker sagas
export function* rootSaga() {
  yield all([
    takeEvery(TASKS.LOAD, handleLoadTasks),
    takeEvery(TASKS.ADD, handleAddTask),
    takeEvery(TASKS.DELETE, handleDeleteTask),
    takeEvery(TASKS.TOGGLE, handleToggleTask),
    takeEvery(TASKS.UPDATE, handleUpdateTask)
  ]);
}
