import axios from "axios";

export default async function pokemonapi() {
  await delay(1 * 1000);
  return await axios.request({
    method: "get",

    url: "https://pokeapi.co/api/v2/pokemon/1",
  });
}
export async function forgeProjects() {
  await delay(1 * 1000);
  return await axios.request({
    method: "get",
    url: "http://10.25.38.36:9090/",
    // url: "http://10.25.38.36:9090/",
    // url: "https://pokeapi.co/api/v2/pokemon/1",
  });
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
