const expect = require('chai').expect;

const sum = require('../../tasks/task01');

describe('Tests for task 01. Function sum()', () => {

  const testData = [
    {n: -100, result: 1},
    {n: 4, result: 10},
    {n: 15, result: 120},
    {n: 21, result: 231},
    {n: 1458, result: 1063611},
  ];

  testData.forEach(({n, result}) => {
    it(`should return ${result} for n = ${n}`, function () {
      expect(sum(n)).to.equal(result);
    });
  });
});
