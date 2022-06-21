import React, { useReducer } from "react";

const initialState = {
  counter: 100,
};

// type ActionReducer =
//   | {
//       type: "Increment";
//       payload: number;
//     }
//   | {
//       type: "Decrement";
//       payload: number;
//     };

function counterReducer(state, action) {
  // switch (action.type) {
  //   case "Increment":
  //     return {
  //       ...state,
  //       counter: state.counter + action.payload,
  //     };
  //   case "Decrement":
  //     return {
  //       ...state,
  //       counter: state.counter - action.payload,
  //     };

  //   default:
  //     throw new Error("Bad Action");
  // }

  return (
    {
      Increment: { ...state, counter: state.counter + action.payload },
      Decrement: { ...state, counter: state.counter - action.payload },
    }[action.type] || new Error("Bad Action")
  );
}

export const ReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const [value, setValue] = React.useState([]);
  const before = performance.now();
  React.useMemo(() => {
    for (let index = 0; index < 10000; index++) {
      setValue([value, value.push("abed", index)]);
    }
  }, []);
  const after = performance.now() - before;

  console.log(after, "performance");
  console.log(value.length);
  return (
    <div style={{ marginBottom: "8rem" }}>
      <h2>{state.counter}</h2>
      <button onClick={() => dispatch({ type: "Increment", payload: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 5 })}>
        decrement
      </button>
      <br></br>
      <div>
        <ul>
          {value.map((item) => (
            <AbedUseMemo name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Abed = ({ name }) => {
  return <li key={name}>{name}</li>;
};

const AbedUseMemo = React.memo(Abed);
