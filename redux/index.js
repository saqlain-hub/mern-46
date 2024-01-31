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
  if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload };
  }
  return state;
}

// gloabl state
// console.log(store.getState());
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// action creators
function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}

function incrementByAmount(value) {
  return { type: "incrementByAmount", payload: value };
}

setInterval(() => {
  store.dispatch(incrementByAmount(5));
}, 2000);

// console.log(store.getState());

/**Redux Principles
 * 1. Single Source of Trush --- Global State
 * 2. Immutable Updates --- State read-only
 * 3. Reducer should be pure function -- no Side-effects
 */

/** Middleware
 * Middleware is a software component that acts as an intermediary, facilitating communication, processing, or modifications between different components or layers of an application
 */
