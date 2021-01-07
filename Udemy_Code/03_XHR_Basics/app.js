fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.result) {
      throw new Error(`Something went Wrong: Status Code${response.status}`);

      return response.json();
    }
  })
  .then((data) => {
    for (let planet of data.results) {
      console.log(planet);
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log("Something went wrong with Fetch");
    console.log(err);
  });
