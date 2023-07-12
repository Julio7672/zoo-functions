const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especies = data.species.find((element, index) => element.name === animal);

  if (especies.residents.every((animais) => animais.age >= age)) {
    return true;
  }
  return false;
};

module.exports = getAnimalsOlderThan;
