const data = require('../data/zoo_data');

const getScheduleDay = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    const obj0 = {};
    obj0[scheduleTarget] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return obj0;
  }
  const array = [];
  const Obj = {};
  const animaisDay = data.species.filter((element) => element.availability.includes(scheduleTarget));
  animaisDay.forEach((element) => {
    array.push(element.name);
  });
  const hourOpen = data.hours[scheduleTarget].open;
  const hourClose = data.hours[scheduleTarget].close;
  Obj[scheduleTarget] = {
    officeHour: `Open from ${hourOpen}am until ${hourClose}pm`,
    exhibition: array,
  };
  return Obj;
};

const getScheduleNoParameter = (scheduleTarget) => {
  const obj = {};
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weekDays.forEach((elemento) => {
    const array = [];
    const arrayAnimaisPerDay = data.species.filter((element) => element.availability
    .includes(elemento)); // const array = arrayAnimaisPerDay.reduce((acc, cur) => [...acc, cur.name], [])
    arrayAnimaisPerDay.forEach((ele) => {
      array.push(ele.name);
    });
    obj[elemento] = {
      officeHour: `Open from ${data.hours[elemento].open}am until ${data.hours[elemento].close}pm`,
      exhibition: array,
    };
    if (elemento === 'Monday') {
      obj['Monday'] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return obj;
};
const getScheduleAnimal = (scheduleTarget) => data.species
.find((element) => element.name === scheduleTarget).availability;
const getSchedule = (scheduleTarget) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const array = [];
  data.species.forEach((element) => array.push(element.name));
  if (!scheduleTarget || (weekDays.includes(scheduleTarget) === false && array
  .includes(scheduleTarget) === false)) {
    return getScheduleNoParameter();
  }
  if (weekDays.some((element) => element === scheduleTarget)) {
    return getScheduleDay(scheduleTarget);
  }
  if (data.species.filter((element) => element.name === scheduleTarget)) {
    return getScheduleAnimal(scheduleTarget);
  }
};
console.log(getSchedule());
module.exports = getSchedule;
