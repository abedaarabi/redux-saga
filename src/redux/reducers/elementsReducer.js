import { elements } from "../../data/elments";

const THREE_D_ELEMENT = "THREE_D_ELEMENT";
const GET_ELEMENT_NAME = "GET_ELEMENT_NAME";
const FIND_ELEMENT_BY_NAME = "FIND_ELEMENT_BY_NAME";
const DELETE_BY_ID = "DELETE_BY_ID";

const initialState = {
  AllElements: {},

  elementByName: {},
};

export function getAllElement() {
  const elementKeyValue = elements.reduce((acc, val) => {
    acc[val.externalId] = val;
    return acc;
  }, {});
  return { type: THREE_D_ELEMENT, payload: elementKeyValue };
}

export function getAllElementNames() {
  const names = elements.map((element) => element.name);

  return { type: GET_ELEMENT_NAME, payload: names };
}
export function findElementByName(name) {
  return { type: FIND_ELEMENT_BY_NAME, payload: name };
}
export function deleteItem(id) {
  return { type: DELETE_BY_ID, payload: id };
}

export default function elementReducer(state = initialState, action) {
  console.log("abed", action);
  switch (action.type) {
    case THREE_D_ELEMENT:
      return { ...state, AllElements: action.payload };
    case DELETE_BY_ID:
      const id = action.payload;
      delete state.AllElements[id];

      return { ...state };
    default:
      return state;
  }
}
