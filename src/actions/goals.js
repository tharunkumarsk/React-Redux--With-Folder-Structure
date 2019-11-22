import { Constants } from "../utils/constants";

function addGoal(goal) {
  return {
    type: Constants.ADD_GOAL,
    goal
  };
}
function removeGoal(id) {
  return {
    type: Constants.REMOVE_GOAL,
    id
  };
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    window.API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert("There is an error occured ... Please try again !");
    });
  };
}

export function handleAddGoal(value, emptyInput) {
  return dispatch => {
    return window.API.saveGoal(value)
      .then(goal => {
        dispatch(addGoal(goal));
        emptyInput();
      })
      .catch(() => {
        alert("There is a problem ...Please try latter !");
      });
  };
}
