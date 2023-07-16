const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    expect(getOpeningHours('saturday', '9:56-am')).toEqual('The zoo is open');
  });
  it('', () => {
    expect(getOpeningHours('sunday', '9:56-pm')).toEqual('The zoo is closed');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('sunday', '9:560-pm');
    }).toThrow('The minutes must be between 0 and 59');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('sunday', '90:56-pm');
    }).toThrow('The hour must be between 0 and 12');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('domingo', '9:56-pm');
    }).toThrow('The day must be valid. Example: Monday');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('sunday', '9:56-');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('sunday', '#');
    }).toThrow('The hour should represent a number');
  });
});
