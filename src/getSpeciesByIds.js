const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids) {
    return data.species.filter((species) => ids.includes(species.id));
  }
  return [];
};

// console.log(getSpeciesByIds('0938aa3-f153-4937-9f88-4858b24d6bce'))

module.exports = getSpeciesByIds;
