const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("IT WORKED!");
  data = JSON.parse(this.responseText);
  const filmUrl = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    aNewHope = JSON.parse(this.responseText);
    console.log("Second Request Worked!");
    console.log(aNewHope);
  });
  filmReq.addEventListener("error", function (e) {
    console.log("ERROR!!!", e);
  });
  filmReq.open("GET", filmUrl);
  filmReq.send();
  //   for (let planet of data.results) {
  //     console.log(planet.name);
  //   }
});
firstReq.addEventListener("error", () => {
  console.log("Error!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
