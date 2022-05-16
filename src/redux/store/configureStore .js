import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countReducder from "../reducers/counter";
import thunk from "redux-thunk";
import pokemon from "../reducers/pokemon";
import { rootSaga, wtachSaga, wtachSaga2 } from "../saga";
import SagaPokemonapiSaga from "../reducers/sagaPokemon";
import { forgeReducer, GET_FORGE } from "../reducers/forge";
import elementReducer from "../reducers/elementsReducer";
const reducer = combineReducers({
  counter: countReducder,
  // pokemon: pokemon,
  sagaPokemon: SagaPokemonapiSaga,
  forge: forgeReducer,
  elementReducer: elementReducer,
});

const action = (name) => {
  return (lastName) => {
    console.log(name + " " + lastName);
  };
};

// function createMyThunkMiddleware() {
//   return (store) => {
//     console.log("from Thunk middlware (store)", store.getState());
//     return (next) => {
//       console.log("from Thunk middlware (dispatch)");
//       return (action) => {
//         console.log("from Thunk middlware", action);
//         if (typeof action === "function") {
// const action =  (dispatch) => {
//   dispatch(pokemonResponsePedding());
//   try {
//     const response = await api();
//     dispatch(pokemonResponseSuccess(response.data));
//   } catch (error) {
//     dispatch(pokemonResponseFailed());
//   }
// };
//           action(store.dispatch);

//
//         } else {
//           next(action);
//         }
//       };
//     };
//   };
// }
// const thunkTwo = createMyThunkMiddleware();

// const thunkMiddleWare = [thunk];
// const store = createStore(reducer, {}, applyMiddleware(...thunkMiddleWare));

// patchStoreToAddLogging(store);

// const myMdl = (store) => (next) => (action) => {
//   if (action.type === GET_FORGE) {
//     // eslint-disable-next-line no-restricted-globals
//     if (confirm("Are you sure you wanna fetch forge projects")) {
//       next(action);
//     }
//   } else {
//     next(action);
//   }
// };

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
// setting a listner for any dispatch

export default store;
