import React from "react";

import { connect } from "react-redux";
import {
  getAllElement,
  getAllElementNames,
  findElementByName,
  deleteItem,
  changeName,
} from "./redux/reducers/elementsReducer";
import getSelectedElementById from "./redux/selectors/selectedElement";
import { getPokemonSaga } from "./redux/reducers/sagaPokemon";


const SelectedElement = (props) => {
  console.log(props);
  return <div>SelectedElement</div>;
};

const mapStateToProps = (state) => {
  return {
    props: getSelectedElementById(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 
  const getElements = dispatch(getAllElement());
  const pokemon = dispatch(getPokemonSaga());
  return {
    fetchElement: getElements,
    pokemon,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectedElement);
