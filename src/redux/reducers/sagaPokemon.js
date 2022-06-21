export const GET_POKEMON_PENDDING = "GET_POKEMON_PENDDING";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAILED = "GET_POKEMON_FAILED";
export const GET_POKEMON = "GET_POKEMON";

const initialState = {
  loadingState: "initial",
  pokemon: [],
};

export function sagaPokemonResponseSuccess(pokemon) {
  return { type: GET_POKEMON_SUCCESS, payload: pokemon };
}

export function sagaPokemonResponseFailed(error) {
  return { type: GET_POKEMON_FAILED, payload: error };
}

export function sagaPokemonResponsePedding(pendding) {
  return { type: GET_POKEMON_PENDDING, payload: pendding };
}

export function getPokemonSaga() {
  return { type: GET_POKEMON };
}

export default function SagaPokemonapiSaga(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_PENDDING:
      return {
        ...state,
        loadingState: action.payload,
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loadingState: "success",
        pokemon: action.payload,
        // pokemon: state.pokemon.concat(action.payload),
      };
    case GET_POKEMON_FAILED:
      return {
        ...state,
        loadingState: action.payload,
      };

    default:
      return state;
  }
}

//testing
