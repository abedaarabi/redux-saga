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

const chains = {
  chain1100: {
    id: 123,
    debtor: {},
    users: [],
  },
};

const value = chains["chain1100"]["debtor"]["chain1100"];

if (value) {
  value.push("id");
} else {
  chains["chain1100"]["debtor"] = ["debtor01"];
}
console.log(chains["chain1100"]);
