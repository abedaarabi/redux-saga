export const GET_FORGE_PENDDING = "GET_FORGE_PENDDING";
export const GET_FORGE_SUCCESS = "GET_FORGE_SUCCESS";
export const GET_FORGE_FAILED = "GET_FORGE_FAILED";
export const GET_FORGE = "GET_FORGE";

let inisialState = {
  loadingForgeState: "inisial",

  projects: [],
};

export function sagaForgeResponseSuccess(projects) {
  return { type: GET_FORGE_SUCCESS, payload: projects };
}

export function sagaForgeResponseFailed(error) {
  return { type: GET_FORGE_FAILED, payload: error };
}

export function sagaForgeResponsePedding(pendding) {
  return { type: GET_FORGE_PENDDING, payload: pendding };
}

export function getForgeProjectsSaga() {
  return { type: GET_FORGE };
}

export function forgeReducer(state = inisialState, action) {
  switch (action.type) {
    case GET_FORGE_PENDDING:
      return { ...state, loadingForgeState: action.payload };
    case GET_FORGE_SUCCESS:
      return {
        ...state,
        loadingForgeState: "success",
        projects: action.payload,
      };
    case GET_FORGE_FAILED:
      return { ...state, loadingForgeState: action.payload };

    default:
      return state;
  }
}
