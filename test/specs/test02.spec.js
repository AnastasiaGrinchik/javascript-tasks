const expect = require('chai').expect;

const getWinner = require('../../tasks/task02');

describe('Tests for task 02. Function getWinner()', () => {

  const testData = [
    {points: ['23:26', '24:30', '30:27', '35:31'], result: 2},
    {points: ['36:32', '32:24', '20:28', '30:26'], result: 1},
    {points: ['36:18', '22:31', '27:21', '19:34'], result: undefined}
  ];

  testData.forEach(({points, result}) => {
    it(`should return ${result} for quarter points = ${points}`, function () {
      expect(getWinner(points)).to.equal(result);
    });
  });
});
