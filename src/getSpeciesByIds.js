const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === []) {
  return ids;
  }
  return data.species.filter((species) => {
  return ids.includes(species.id);
  });
};
  
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

module.exports = getSpeciesByIds;
