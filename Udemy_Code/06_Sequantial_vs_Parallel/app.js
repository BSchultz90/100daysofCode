// SEQUENTIAL REQUESTS
// async function get3pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// PARALLEL REQUESTS
async function get3pokemon() {
  const pokeReq1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const pokeReq2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const pokeReq3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([pokeReq1, pokeReq2, pokeReq3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemonObject of results) {
    console.log(pokemonObject.data.name);
  }
}

get3pokemon();

const changeBackground = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function lightShow() {
  await changeBackground("teal", 1000);
  await changeBackground("pink", 1000);
  await changeBackground("blue", 1000);
  await changeBackground("orange", 1000);
}

lightShow();
