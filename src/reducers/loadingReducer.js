import { TASKS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case TASKS.LOAD:
      return true;
    case TASKS.LOAD_SUCCESS:
      return false;
    case TASKS.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
