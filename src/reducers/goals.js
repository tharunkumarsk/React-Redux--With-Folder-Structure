import { Constants } from "../utils/constants";

export default function goals(state = [], action) {
  switch (action.type) {
    case Constants.ADD_GOAL:
      return state.concat([action.goal]);
    case Constants.REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case Constants.ADD_API_DATA:
      return action.goals;
    default:
      return state;
  }
}
