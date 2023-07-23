const data = require('../data/zoo_data');

const getEmployeesCoverageAnimalNames = (ids) => {
  const array = []
 data.species.filter((element) => ids.includes(element.id)).forEach((ele) => {
  array.push(ele.name)
 })
 return array
};

const getEmployeesCoverageAnimallocations = (ids) => {
  const array = []
 data.species.filter((element) => ids.includes(element.id)).forEach((ele) => {
  array.push(ele.location)
 })
 return array
};

const getEmployeesCoverageNoParameter = () => {
  return data.employees.map((ele) => {
    const obj = {
    id: ele.id,
    fullName:`${ele.firstName} ${ele.lastName}`,
    species: getEmployeesCoverageAnimalNames(ele.responsibleFor),
    locations: getEmployeesCoverageAnimallocations(ele.responsibleFor),
  }
  return obj
  })
};

const getEmployeesCoverage = (infos) => {
  if (!infos) {
    return getEmployeesCoverageNoParameter()
  }
  const obj = {}
  const empregado = data.employees.find((element) =>  infos.name === element.firstName || infos.name === element.lastName || infos.id === element.id)
  if (!empregado) {
    throw new Error('Informações inválidas')
  }
  obj.id = empregado.id
  obj.fullName = `${empregado.firstName} ${empregado.lastName}`
  obj.species = getEmployeesCoverageAnimalNames(empregado.responsibleFor)
  obj.locations = getEmployeesCoverageAnimallocations(empregado.responsibleFor)
  return obj
};
console.log(getEmployeesCoverageNoParameter())
module.exports = getEmployeesCoverage;
