const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.map((pessoa) => {
    if (pessoa.age < 18) {
      obj.child += 1;
    }
    if (pessoa.age >= 18 && pessoa.age < 50) {
      obj.adult += 1;
    }
    if (pessoa.age >= 50) {
      obj.senior += 1;
    }
    return obj;
  });
  return obj;
};
const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  if (entrants.length === 0) {
    return 0;
  }
  const childPrice = data.prices.child;
  const adultPrice = data.prices.adult;
  const seniorPrice = data.prices.senior;
  if (countEntrants(entrants)) {
    return (countEntrants(entrants).child * childPrice)
    + (countEntrants(entrants).adult * adultPrice)
    + (countEntrants(entrants).senior * seniorPrice);
  }
};

module.exports = { calculateEntry, countEntrants };
