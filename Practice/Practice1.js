function checkParse(url) {
  if (url.status != 200) {
    throw new error("Error in fetching URL:");
  }
  return url.json();
}
fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
  .then(checkParse)
  .then((url) => {
    let urlDatacopy = [...url];
    let deepUr
  });
