import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { detach } from "redux-saga";
import { testCom } from "./funToCom";
import { decremnet as decrement, increment } from "./redux/reducers/counter";
import {
  getAllElement,
  getAllElementNames,
  findElementByName,
  deleteItem,
  changeName,
} from "./redux/reducers/elementsReducer";

import * as abed from "./redux/reducers/sagaPokemon";
import * as abed1 from "./redux/reducers/sagaPokemon";

const getName = (arr, text) => {
  return arr.find((i) => i.includes(text));
};

export const Counter = (props) => {
  const Number = testCom(12);

  const result = Object.values(abed);
  const result1 = Object.values(abed1);

  const all = Array.from(new Set([...result, ...result1]));

  console.log(all);

  console.log(getName(all, "GET_POKEMON"));

  const dispatch = useDispatch();
  let arr = [];
  let doneArr = [];
  const [isInput, setIsInput] = React.useState(arr);
  const [done, setDone] = React.useState(doneArr);

  const [text, setText] = React.useState("");

  const { elementReducer } = useSelector((state) => state);
  const handelIncrement = () => {
    dispatch(increment());
  };

  const before = performance.now();
  const allElement = Object.values(elementReducer.AllElements);

  allElement.forEach((i) => {
    arr.push(false);

    doneArr.push(false);
  });
  const after = performance.now() - before;

  console.log(after, "performance");
  const handelDecrement = () => {
    dispatch(decrement(2));
    dispatch(findElementByName("Beton vægelement - 150mm"));
  };

  const handelDelete = (id) => {
    console.log(id);
    dispatch(deleteItem(id));
  };
  const handelChangeName = (value) => {
    console.log(value);
    dispatch(changeName(value));
  };

  const handelButton = (index) => {
    const isNot = !isInput[index];

    isInput[index] = isNot;

    const newArr = [...isInput];
    setIsInput(newArr);

    handelChangeName({
      id: allElement[index].externalId,

      name: text ? text : allElement[index].name,
    });
    setText("" && allElement[index].name);
  };

  React.useEffect(() => {
    // dispatch(getPokemonSaga());
    // dispatch(getForgeProjectsSaga());
    // dispatch(getAllElement());
  }, [dispatch]);

  return (
    <>
      <div>
        <button onClick={handelIncrement}>increment</button>
        <button onClick={handelDecrement}>decrement</button>

        <Number />
      </div>

      <div>
        {allElement.map((item, index) => {
          return (
            <div
              key={item.externalId}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>done</p>
              <input
                type={"checkbox"}
                onChange={() => {
                  const newDone = !done[index];
                  done[index] = newDone;
                  const newArr = [...done];
                  setDone(newArr);
                }}
              />
              <button
                onClick={() => {
                  handelDelete(item.externalId);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const isNot = !isInput[index];

                  isInput[index] = isNot;

                  const newArr = [...isInput];
                  setIsInput(newArr);
                  if (text) {
                    handelChangeName({
                      id: allElement[index].externalId,

                      name: text ? text : allElement[index].name,
                    });
                    setText("" && allElement[index].name);
                  }
                }}
              >
                {!isInput[index] ? "Edit" : "Save"}
              </button>
              {isInput[index] ? (
                <input
                  type={"text"}
                  defaultValue={item.name}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              ) : (
                <p
                  style={{
                    backgroundColor: done[index] ? "red" : "white",
                    color: done[index] ? "white" : "black",
                  }}
                >
                  {item.name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
