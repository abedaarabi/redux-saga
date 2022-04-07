import api from "../api/pokemonApi";

export const GET_POKEMON_PENDDING = "GET_POKEMON_PENDDING";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAILED = "GET_POKEMON_FAILED";

const initialState = {
  loadingState: "initial",
  pokemon: [],
};

function pokemonResponseSuccess(pokemon) {
  return { type: GET_POKEMON_SUCCESS, payload: pokemon };
}
function pokemonResponseFailed() {
  return { type: GET_POKEMON_FAILED };
}
function pokemonResponsePedding() {
  return { type: GET_POKEMON_PENDDING };
}

//calling on mount componenet (useEffect)
export function getPokemon() {
  return async (dispatch, getState) => {
    dispatch(pokemonResponsePedding());
    try {
      const response = await api();
      dispatch(pokemonResponseSuccess(response.data));
    } catch (error) {
      dispatch(pokemonResponseFailed());
    }
  };
}

export default function pokemonapi(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_PENDDING:
      return {
        ...state,
        loadingState: "pendding",
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loadingState: "success",
        pokemon: state.pokemon.concat(action.payload),
      };
    case GET_POKEMON_FAILED:
      return {
        ...state,
        loadingState: "failed",
      };

    default:
      return state;
  }
}
