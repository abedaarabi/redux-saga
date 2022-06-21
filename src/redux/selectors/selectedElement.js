import { createSelector } from "reselect";

const elementSelector = (state) => state.elementReducer["AllElements"];
const pokemonSelector = (state) => state;
const selectElementById = (state) => state.externalId;

const getSelectedElementById = (elements, elementById, pokemonSelector) => {

  return { elements, pokemonSelector };
  //   const resultSelectedIds = elements.filter((element) =>
  //     elementByID.contains(element.externalId)
  //   );

  //   return resultSelectedIds;
};

export default createSelector(
  elementSelector,
  selectElementById,
  pokemonSelector,
  getSelectedElementById
);
