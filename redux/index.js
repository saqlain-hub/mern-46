import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// Store
const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

// Reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutability --- state should not be changed directly
    return { amount: state.amount + 1 };
  }
  return state;
}

// gloabl state
// console.log(store.getState());
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);

// console.log(store.getState());

/**Redux Principles
 * 1. Single Source of Trush --- Global State
 * 2. Immutable Updates --- State read-only
 * 3. Reducer should be pure function -- no Side-effects
 */
