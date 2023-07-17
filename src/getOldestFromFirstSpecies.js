const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  if (id === undefined) {
    throw new Error('Um ID valido precisa ser passado');
  }
  const arrayDeAnimaisId = (data.employees.find((element) => element.id === id).responsibleFor);
  const firstAnimal = arrayDeAnimaisId[0];
  const animal = data.species.find((elemento) => elemento.id === firstAnimal);
  const residentsAge = animal.residents.filter((elementu) => elementu.age).map((ele) => ele.age);
  const ageOfOldestAnimal = residentsAge.sort((a, b) => b - a)[0];
  return Object.values(animal.residents
    .find((oldestAnimal) => oldestAnimal.age === ageOfOldestAnimal));
};
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

module.exports = getOldestFromFirstSpecies;
