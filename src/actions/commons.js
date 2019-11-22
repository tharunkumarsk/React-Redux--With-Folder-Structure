import { Constants } from "../utils/constants";
import API from "goals-todos-api";

function addAPIData(todos, goals) {
  return {
    type: Constants.ADD_API_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(addAPIData(todos, goals));
      }
    );
  };
}
