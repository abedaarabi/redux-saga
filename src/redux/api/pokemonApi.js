import axios from "axios";

export default async function pokemonapi() {
  return await axios.request({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/1",
  });
}
