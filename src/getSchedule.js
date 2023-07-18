const data = require('../data/zoo_data');

const getScheduleDay = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    const obj0 = {};
    obj0[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return obj0;
  }
  const array = [];
  const Obj = {};
  const animaDay = data.species.filter((element) => element.availability.includes(scheduleTarget));
  animaDay.forEach((element) => {
    array.push(element.name);
  });
  const O = data.hours[scheduleTarget].open;
  const C = data.hours[scheduleTarget].close;
  Obj[scheduleTarget] = { officeHour: `Open from ${O}am until ${C}pm`, exhibition: array };
  return Obj;
};
const getScheduleNoParameter = (scheduleTarget) => {
  const obj = {};
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weekDays.forEach((elemento) => {
    const array = [];
    data.species.filter((element) => element.availability
      .includes(elemento)).forEach((ele) => {
      array.push(ele.name);
    }); // const array = arrayAnimaisPerDay.reduce((acc, cur) => [...acc, cur.name], [])
    obj[elemento] = {
      officeHour: `Open from ${data.hours[elemento].open}am until ${data.hours[elemento].close}pm`,
      exhibition: array,
    };
    if (elemento === 'Monday') {
      obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
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
  return getScheduleAnimal(scheduleTarget);
};
// console.log(getSchedule());
module.exports = getSchedule;
