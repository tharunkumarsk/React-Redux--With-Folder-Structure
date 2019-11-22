import { Constants } from "../utils/constants";

export default function todos(state = [], action) {
  switch (action.type) {
    case Constants.ADD_TODO:
      return state.concat([action.todo]);
    case Constants.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case Constants.TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case Constants.ADD_API_DATA:
      return action.todos;
    default:
      return state;
  }
}
