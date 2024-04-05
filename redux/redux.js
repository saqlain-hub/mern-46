import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// store
const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

// reducer for createStore method
// a callback function that will be called when createStore() is invoked
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutability -- do not mutate state and return a copy
    return { amount: state.amount + 1 };
  }
  return state;
}

// global state
// console.log(store.getState());

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
