import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// action name constants
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

// store
const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

// reducer for createStore method
// a callback function that will be called when createStore() is invoked
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };

    case dec:
      return { amount: state.amount - 1 };

    case incByAmt:
      return { amount: state.amount + action.payload };
  }

  return state;
}

// global state
// console.log(store.getState());

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// Action creators
function initUser() {
  return { type: init };
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
  store.dispatch(decrement());
}, 2000);
