const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const pessoa = data.employees
  .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName)
  if (pessoa) {
    return pessoa
  } 
  return {};
  // seu código aqui
};

module.exports = getEmployeeByName;
