import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const history = [];

// action name constants
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

// Store
const store = createStore(reducer, applyMiddleware(logger.default));
// Reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    // immutability --- state should not be changed directly
    return { amount: state.amount + 1 };
  }
  if (action.type === dec) {
    return { amount: state.amount - 1 };
  }
  if (action.type === incByAmt) {
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
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
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
