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

async function delay(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i.json());
    }, 2000);
  }).then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
}

async function ParseData(response) {
  if (!response.ok) {
    console.log("Error in Fetching API!!");
    throw new Error(`Error Occured! ${response.status}`);
  }

  let resp = await delay(response);
  return resp;
}

const response = fetch("https://swapi.info/api/vehicles");
response
  .then((data) => {
    ParseData(data);
  })
  .catch(() => {
    console.log("Error in Finding the Data!!");
  });
