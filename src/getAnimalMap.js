const data = require('../data/zoo_data');

const getAnimalMapNoParameter = () => {
  const obj = {};
  data.species.forEach((element) => {
    const array = [];
    data.species.filter((elemento) => element.location.includes(elemento.location))
      .forEach((elementi) => {
        array.push(elementi.name);
      });
    obj[element.location] = array;
  });
  return obj;
};
const getAnimalMapSexSorted = (options) => {
  const obj0 = {};
  data.species.map((ele) => {
    return obj0[ele.location] = [];
  });
  data.species.forEach((elemento) => {
    if (options.includeNames) {
      const arrayNames = elemento.residents
        .filter((element) => !options.sex || element.sex === options.sex)
        .map((element) => element.name);
      if (options.sorted) {
        arrayNames.sort();
      }
      obj0[elemento.location].push({ [elemento.name]: arrayNames });
    }
  });
  return obj0;
};
const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getAnimalMapNoParameter();
  }
  return getAnimalMapSexSorted(options);
};

// console.log(getAnimalMap())
module.exports = getAnimalMap;
