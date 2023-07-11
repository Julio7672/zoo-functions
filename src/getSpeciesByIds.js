const data = require('../data/zoo_data');

const getSpeciesByIds = (ids) => {
  // seu código aqui
  data.species.forEach((element) => {
    if (element.id === ids) {
      return element.name;
    }
    if (element.id.length === [0]) {
      return [];
    }
  });
};

module.exports = getSpeciesByIds;
