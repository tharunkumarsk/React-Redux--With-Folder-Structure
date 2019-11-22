const logger = store => next => action => {
  console.group(action.type);
  console.log('current action is"', action);
  const result = next(action);
  console.log('current state is"', store.getState());
  return result;
  console.groupEnd();
};

export default logger;
