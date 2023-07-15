const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  const obj = {child: 0, adult: 0, senior: 0}
    entrants.map((pessoa) => {
    if (pessoa.age < 18)  {
      return obj.child += 1;
    }
    if (pessoa.age >= 18 && pessoa.age < 50) {
      return obj.adult += 1;
    }
    if (pessoa.age >= 50 ) {
      return obj.senior += 1;
    }
  });
  return obj;
};

const calculateEntry = (entrants) => {
 const childPrice =  data.prices.child ;
 const adultPrice = data.prices.adult;
 const seniorPrice = data.prices.senior;
  if (countEntrants(entrants)) {
    return (countEntrants(entrants).child * childPrice) + 
    (countEntrants(entrants).adult * adultPrice) +
    (countEntrants(entrants).senior * seniorPrice);
    
  } 
  return 0;
 }

module.exports = { calculateEntry, countEntrants };
