import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

const history = [];

// action name constants
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

// Store
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

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

// Async API Call action creator
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/acounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

// action creators
function initUser(value) {
  return { type: init, payload: value };
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

setTimeout(() => {
  store.dispatch(getUser(2));
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
