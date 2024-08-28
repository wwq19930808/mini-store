export function combineReducer(reducers) {
  return (state = {}, action) => {
    let newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}
