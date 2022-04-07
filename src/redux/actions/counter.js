const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  counter: 0,
};
export function increment() {
  return { type: INCREMENT };
}

export function decremnet(id) {
  return { type: DECREMENT, payload: id };
}

export default function number(state = initialState, { type }) {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}
