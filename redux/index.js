import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

const history = [];

// action name constants
// const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const decByAmt = "account/decrementByAmount";
const getUserPending = "account/getUser/pending";
const getUserFulfilled = "account/getUser/fulfilled";
const getUserRejected = "account/getUser/rejected";

const incBonus = "bonus/increment";

// Store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk)
);

// Reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getUserFulfilled:
      return { amount: action.payload, pending: false };
    case getUserRejected:
      return { ...state, error: action.error, pending: false };
    case getUserPending:
      return { ...state, pending: true };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    case decByAmt:
      return { amount: state.amount - action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    case incByAmt:
      if (action.payload >= 100) return { points: state.points + 1 };
    default:
      return state;
  }
}

// Async API Call action creator
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

// action creators
function getAccountUserFulfilled(value) {
  return { type: getUserFulfilled, payload: value };
}

function getAccountUserRejected(error) {
  return { type: getUserRejected, error: error };
}

function getAccountUserPending() {
  return { type: getUserPending };
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

function incrementBonus() {
  return { type: incBonus };
}

function decrementByAmount(value) {
  return { type: decByAmt, payload: value };
}

setTimeout(() => {
  // store.dispatch(getUserAccount(1));
  //   store.dispatch(incrementByAmount(200));
  store.dispatch(decrementByAmount(5));
  //   store.dispatch(incrementBonus());
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
