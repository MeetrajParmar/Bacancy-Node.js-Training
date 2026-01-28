const CheckStatusandParse = (response) => {
  if (!response.ok) {
    console.log("Error inn Fetchhing API");
    throw new Error(`Status Code Error:${response.status}`);
  }
  return response.json();
};

fetch("https://swapi.info/api/vehicles")
  .then(CheckStatusandParse)
  .then((data) => {
    //console.log(data[0].films[0]);
    const data_film = data[0].films[0];
    return fetch(data_film);
  })
  .then(CheckStatusandParse)
  .then((filmData) => {
    console.log(filmData.title);
  })
  .catch(() => {
    console.log("Unable to convert it into JSON");
  });
