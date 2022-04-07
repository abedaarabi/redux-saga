import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";

import { getPokemonSaga } from "./redux/actions/sagaPokemon";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const { loadingState, pokemon } = useSelector((state) => state.sagaPokemon);

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getPokemonSaga());
  // }, [dispatch]);

  function handelPokemon() {
    dispatch(getPokemonSaga());
    console.log(loadingState, pokemon);
  }

  return (
    <div className="App">
      <h2>counter: {counter}</h2>
      <Counter />
      <button onClick={handelPokemon}>handelPokemon API</button>
    </div>
  );
}

export default App;
