import { Constants } from "../utils/constants";

function addAPIData(todos, goals) {
  return {
    type: Constants.ADD_API_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([window.API.fetchTodos(), window.API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(addAPIData(todos, goals));
      }
    );
  };
}
