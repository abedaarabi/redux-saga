import store from "./redux/store/configureStore ";
import { decremnet, increment } from "./redux/actions/counter";

async function* fetchAPi() {
  yield (await fetch("https://pokeapi.co/api/v2/pokemon/2")).json();
  yield (await fetch("https://pokeapi.co/api/v2/pokemon/1")).json();
  yield (await fetch("https://pokeapi.co/api/v2/pokemon/6")).json();
}

// const response = fetchAPi();

// response.next().then((data) => console.log(data.value));
// response.next().then((data) => console.log(data.value));
// response.next().then((data) => console.log(data.value));
// response.next().then((data) => console.log(data.value));
