// const ax_res = axios.get("https://swapi.info/api/vehicles");
// axios
//   .get("https://swapi.info/api/vehicles")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     throw new Error("Error Status Code", response.status);
//   });

// axios.get("https://swapi.info/api/vehicles").then((res) => {
//   console.log(res);
//   //   console.log(res.data[0].name);
//   //   for (let vh of res.data) {
//   //     console.log(vh.name);
//   //   }
//   const filmUrl = res.data[0].films[0];
//   //   axios.get(filmUrl);
//   console.log("Film");

//   for (let vh of res.data) {
//     let filmUrl = vh.films;
//     //console.log(filmUrl);
//     axios
//       .get(filmUrl)
//       .then((resp) => {
//         console.log(resp.data.title);
//       })
//       .catch((res) => {
//         console.log(`Error in Fetching ${filmUrl}`);
//       });
//   }
// });

axios.get("https://swapi.info/api/vehicles").then((res) => {
  for (let vh of res.data) {
    const filmRequests = vh.films.map((url) => axios.get(url));

    Promise.allSettled(filmRequests).then((results) => {
      results.forEach((result) => {
        if (result.status === "fulfilled") {
          console.log(result.value.data.title);
        } else {
          console.log("Failed to load a film");
        }
      });
    });
  }
});
