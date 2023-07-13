const data = require('../data/zoo_data');

const isManager = (id) => data.employees.filter((pessoa) => pessoa.id === id)
    .some((employee) => employee.managers.length < 2);

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
const getRelatedEmployees = (managerId) => {
  const boolGerente = data.employees.filter((pessoa) => pessoa.id === managerId)
    .some((employee) => employee.managers.length < 2);

  if (!boolGerente) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeesArr = [];
  data.employees.forEach((element) => {
    if (element.managers.some((id) => id === managerId)) {
      employeesArr.push(`${element.firstName} ${element.lastName}`)
    };
  });
  return employeesArr;
};
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
module.exports = { isManager, getRelatedEmployees };
