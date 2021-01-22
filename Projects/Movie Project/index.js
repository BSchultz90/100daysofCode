fetchData = async () => {
  response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "c4a9c34d",
      i: "tt0848228",
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");
input.addEventListener("input", () => {});
