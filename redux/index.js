import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

const history = [];

// action name constants
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

// Store
const store = createStore(reducer, applyMiddleware(logger.default));
// Reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// Async API Call
async function getUser() {
  const { data } = await axios.get("http://localhost:3000/acounts/1");
  console.log(data);
}

// getUser();

// action creators
async function initUser() {
  const { data } = await axios.get("http://localhost:3000/acounts/1");
  return { type: init, payload: data.amount };
}
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
  store.dispatch(initUser());
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
