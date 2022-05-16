import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { detach } from "redux-saga";
import { decremnet, increment } from "./redux/reducers/counter";
import {
  getAllElement,
  getAllElementNames,
  findElementByName,
  deleteItem,
} from "./redux/reducers/elementsReducer";

export const Counter = (props) => {
  const dispatch = useDispatch();

  const { elementReducer } = useSelector((state) => state);

  const handelIncremnet = () => {
    dispatch(increment());
  };

  const handelDecrement = () => {
    dispatch(decremnet(2));
    dispatch(findElementByName("Beton vægelement - 150mm"));
  };

  const handelDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const allElement = Object.values(elementReducer.AllElements);
  console.log(allElement);

  React.useEffect(() => {
    // dispatch(getPokemonSaga());
    // dispatch(getForgeProjectsSaga());
    dispatch(getAllElement());
  }, [dispatch]);

  return (
    <>
      <div>
        <button onClick={handelIncremnet}>incremnet</button>
        <button onClick={handelDecrement}>decremnet</button>
      </div>

      <div>
        {allElement.map((item) => (
          <div key={item.externalId}>
            <input
              type={"checkbox"}
              onChange={() => handelDelete(item.externalId)}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
