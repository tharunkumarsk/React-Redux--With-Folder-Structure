import logger from "./logger";
import checker from "./checker";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default applyMiddleware({
  thunk,
  logger,
  checker
});
