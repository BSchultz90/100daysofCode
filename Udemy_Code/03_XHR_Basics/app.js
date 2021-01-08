// const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
//   return axios.get(url);
// };
// const printPlanets = ({ data }) => {
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// fetchNextPlanets()
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("ERRROR!!!", err);
//   });

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planes/");
    console.log(res);
  } catch (e) {
    console.log("IN CATCH!!!!", e);
  }
}

getPlanets();
