const fetchData = require("../utils/fetchData.js");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const {
      info: { count },
    } = data;
    const {
      results: [{ id }],
    } = data;
    const character = await fetchData(`${API}${id}`);
    const { name } = character;
    const {
      origin: { url },
    } = character;
    const origin = await fetchData(url);
    const { dimension } = origin;

    console.log(`Total de personajes ${count}`);
    console.log(`nombre ${name}`);
    console.log(`Dimension ${dimension}`);
  } catch (err) {
    console.error(err);
  }
};

console.log("Before");
anotherFunction(API);
console.log("After");
