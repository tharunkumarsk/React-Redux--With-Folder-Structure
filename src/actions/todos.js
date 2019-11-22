import { Constants } from "../utils/constants";
import API from "goals-todos-api";

function addTodo(todo) {
  return {
    type: Constants.ADD_TODO,
    todo
  };
}
function removeTodo(id) {
  return {
    type: Constants.REMOVE_TODO,
    id
  };
}
function toggleTodo(id) {
  return {
    type: Constants.TOGGLE_TODO,
    id
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert("There is an error occured ... Please try again !");
    });
  };
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));
    API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("There is an error occured ... Please try again !");
    });
  };
}

export function handleAddTodo(value, emptyInput) {
  return dispatch => {
    return API.saveTodo(value)
      .then(todo => {
        dispatch(addTodo(todo));
        emptyInput();
      })
      .catch(() => {
        alert("There is a problem ...Please try latter !");
      });
  };
}
