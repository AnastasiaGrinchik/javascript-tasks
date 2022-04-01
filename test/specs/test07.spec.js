const expect = require('chai').expect;

const getTimeDelta = require('../../tasks/task07');

describe('Tests for task 07. Function getTimeDelta()', () => {

  const testData = [
    {x: '01:01:01', y: '02:02:03', result: 3662},
    {x: '00:00:00', y: '00:00:01', result: 1},
    {x: '01:19:30', y: '01:20:20', result: 50}
  ];

  testData.forEach(({x, y, result}) => {
    it(`should return ${result} for x = ${x} and y = ${y}`, function () {
      expect(getTimeDelta(x, y)).to.equal(result);
    });
  });
});
