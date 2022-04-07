import { takeLatest, takeEvery } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import pokemonapi from "../api/pokemonApi";
import {
  GET_POKEMON,
  sagaPokemonResponseFailed,
  sagaPokemonResponsePedding,
  sagaPokemonResponseSuccess,
} from "../actions/sagaPokemon";

function* getApiData() {
  try {
    yield put(sagaPokemonResponsePedding("pendding"));
    const { data } = yield call(pokemonapi);
    yield put(sagaPokemonResponseSuccess(data));
  } catch (error) {
    yield put(sagaPokemonResponseFailed(error));
  }
}

const sags = [getApiData];

export function* wtachSaga() {
  yield takeLatest(GET_POKEMON, ...sags);
}
