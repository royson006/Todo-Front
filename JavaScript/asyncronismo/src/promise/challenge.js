const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    const {
      info: { count },
    } = data;
    console.log(`Total de personajes ${count}`);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    const { name } = data;
    const {
      origin: { url },
    } = data;
    console.log(`el nombre es ${name}`);
    return fetchData(url);
  })
  .then((data) => {
    const { dimension } = data;
    console.log(`Dimension ${dimension}`);
  })
  .catch((err) => console.error(err));
