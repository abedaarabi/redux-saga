import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";
import { getPokemon } from "./redux/actions/pokemon";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const { loadingState, pokemon } = useSelector((state) => state.pokemon);
  console.log(loadingState, pokemon);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div className="App">
      <h2>counter: {counter}</h2>
      <Counter />
    </div>
  );
}

export default App;
