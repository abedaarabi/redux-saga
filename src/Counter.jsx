import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremnet, increment } from "./redux/actions/counter";
import { getForgeProjectsSaga } from "./redux/actions/forge";
import { getPokemonSaga } from "./redux/actions/sagaPokemon";

export const Counter = (props) => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  const handelIncremnet = () => {
    dispatch(increment());
  };

  const handelDecrement = () => {
    dispatch(decremnet(2));
  };

  // React.useEffect(() => {
  //   dispatch(getPokemonSaga());
  //   dispatch(getForgeProjectsSaga());
  // }, [dispatch]);
  

  return (
    <div>
      <button onClick={handelIncremnet}>incremnet</button>
      <button onClick={handelDecrement}>decremnet</button>
    </div>
  );
};
