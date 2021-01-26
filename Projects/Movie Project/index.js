fetchData = async (searchTerm) => {
  response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "c4a9c34d",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

let timeoutId;
onInput = (event) => {
  fetchData(event.target.value);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
