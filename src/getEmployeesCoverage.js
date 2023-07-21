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
 const empregadosId = data.employees.map((ele) => ele.id)
 const empregadosfirstName = data.employees.map((ele) => ele.firstName)
 const empregadosLastName = data.employees.map((ele) => ele.lastName)
 data.employees.forEach((ele) => {
  const obj = {};
  data.employees.forEach((empregado) => {
    obj.fullName = `${ele.firstName} ${ele.lastName}`
  })
  return obj;
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
console.log(getEmployeesCoverage())
module.exports = getEmployeesCoverage;
