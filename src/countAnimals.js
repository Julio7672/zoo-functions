const data = require('../data/zoo_data');

const countAnimalsvazio = () => {
  const animalsArray = {};
  data.species.forEach((element) => {
    animalsArray[element.name] = element.residents.length;
  });
  return animalsArray;
};
const countAnimalss = (animal) => {
  const animalArray = [];
  if(Object.keys(animal).includes('species')) {
    data.species.forEach((element) => {
    const animalNum = element.residents.length;      
      if (element.name === animal.species) {
        return animalArray.push(animalNum);
      }  
    });
  }
  return animalArray[0];
};
const countAnimalsSex = (animal) => {
  const animalArray = [];
  if (Object.keys(animal).includes('species' && 'sex')) {
    data.species.forEach((element) => {      
      if (element.name === animal.species) {
        const animalNum = element.residents.filter((elemento) => elemento.sex === animal.sex).length;
        return animalArray.push(animalNum);
      } 
    });
  }
  return animalArray[0];
};
const countAnimals = (animal) => {
  if (animal === undefined) {
    return countAnimalsvazio();
  }
  if (Object.keys(animal).includes('sex')) {
    return countAnimalsSex(animal);
  }
  return countAnimalss(animal);
};
// console.log(countAnimals({ species: 'penguins', sex: 'female' }))
module.exports = countAnimals;
