import { takeLatest, takeEvery, all, spawn, fork } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import pokemonapi, { forgeProjects } from "../api/pokemonApi";
import {
  GET_POKEMON,
  sagaPokemonResponseFailed,
  sagaPokemonResponsePedding,
  sagaPokemonResponseSuccess,
} from "../reducers/sagaPokemon";
import {
  GET_FORGE,
  sagaForgeResponseFailed,
  sagaForgeResponsePedding,
  sagaForgeResponseSuccess,
} from "../reducers/forge";



function* getApiData() {
  console.log("gerApi1");
  yield put(sagaPokemonResponsePedding("pendding"));
  try {
    const { data } = yield call(pokemonapi) || {};
    yield put(sagaPokemonResponseSuccess(data));
  } catch (error) {
    yield put(sagaPokemonResponseFailed(error));
  }
}

function* getApiData2() {
  yield put(sagaForgeResponsePedding("pending"));
  try {
    const { data } = yield call(forgeProjects) || [];

    yield put(sagaForgeResponseSuccess(data));
  } catch (error) {
    yield put(sagaForgeResponseFailed(error));
  }
}


function* sagaOne() {
  yield takeLatest(GET_POKEMON, getApiData);
}


function* sagaTwo() {
  yield takeLatest(GET_FORGE, getApiData2);
}


export function* rootSaga() {
  const sagas = [sagaOne, sagaTwo];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            console.log(error);
          }
        }
      })
    )
  );
}


//https://stackoverflow.com/questions/51855748/should-i-run-all-saga-when-launch-app
//test
