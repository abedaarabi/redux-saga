import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremnet, increment } from "./redux/actions/counter";

export const Counter = (props) => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  const handelIncremnet = () => {
    dispatch(increment());
  };

  const handelDecrement = () => {
    dispatch(decremnet(2));
  };

  return (
    <div>
      <button onClick={handelIncremnet}>incremnet</button>
      <button onClick={handelDecrement}>decremnet</button>
    </div>
  );
};
