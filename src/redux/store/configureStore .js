import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countReducder from "../actions/counter";
import thunk from "redux-thunk";
import pokemon from "../actions/pokemon";
const reducer = combineReducers({
  counter: countReducder,
  pokemon,
});

function createMyThunkMiddleware() {
  return (store) => {
    console.log("from Thunk middlware (store)", store.getState());
    return (next) => {
      console.log("from Thunk middlware (dispatch)");
      return (action) => {
        console.log("from Thunk middlware", action);
        if (typeof action === "function") {
          const actionObj = action(store);

          return actionObj;
        } else {
          next(action);
        }
      };
    };
  };
}
const thunkTwo = createMyThunkMiddleware();

const thunkMiddleWare = [thunk, thunkTwo];
const store = createStore(reducer, {}, applyMiddleware(...thunkMiddleWare));

// patchStoreToAddLogging(store);
// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

// const store = createStore(reducer, {}, applyMiddleware(...middleware));

// setting a listner for any dispatch

export default store;
