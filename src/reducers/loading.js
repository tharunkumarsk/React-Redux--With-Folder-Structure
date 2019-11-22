import { Constants } from "../utils/constants";

export default function loading(state = true, action) {
  switch (action.type) {
    case Constants.ADD_API_DATA:
      return false;
    default:
      return state;
  }
}
