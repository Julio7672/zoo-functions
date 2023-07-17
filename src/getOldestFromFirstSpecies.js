const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const arrayDeAnimais = (data.employees.find((element) => element.id === id).responsibleFor);
  const firstAnimal = arrayDeAnimais[0];
  const animal = data.species.find((elemento) => elemento.id === firstAnimal);
  const residents = animal.residents.filter((elementu) => elementu.age).map((ele) => {
     return ele.age;
  });
  const ageOfOldestAnimal = residents.sort((a, b) => b - a)[0];
  return Object.values(animal.residents
    .find((oldestAnimal) => oldestAnimal.age === ageOfOldestAnimal));
};
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

module.exports = getOldestFromFirstSpecies;
