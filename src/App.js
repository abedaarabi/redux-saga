import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";
import { getForgeProjectsSaga } from "./redux/reducers/forge";

import { getPokemonSaga } from "./redux/reducers/sagaPokemon";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const state = useSelector((state) => state);

  const { loadingState, pokemon } = state.sagaPokemon;
  const { loadingForgeState, projects } = state.forge;

  console.group("App component");
  console.log(loadingState, pokemon);
  console.log(loadingForgeState, projects);
  console.groupEnd();
  const dispatch = useDispatch();

  function handelPokemon() {
    dispatch(getPokemonSaga());
  }
  function handelForge() {
    console.log("forge");
    dispatch(getForgeProjectsSaga());
  }

  return (
    <div className="App">
      <h2>counter: {counter}</h2>
      <Counter />
      <button onClick={handelPokemon}>handelPokemon API</button>
      <button onClick={handelForge}>Forge API</button>
    </div>
  );
}

export default App;
