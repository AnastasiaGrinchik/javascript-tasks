const expect = require('chai').expect;

const getUnionArray = require('../../tasks/task05');

describe('Tests for task 05. Function getUnionArray()', () => {

  const testData = [
    {arr1: [1, 1, 3, 2, 5], arr2: [5, 3, 1, 7, 7], result: [5, 3, 1]},
    {arr1: [3, 6, 9, 12, 15, 18], arr2: [2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], result: [12, 6]},
    {arr1: [1, 2, 3], arr2: [10, 9, 8, 7], result: []}
  ];

  testData.forEach(({arr1, arr2, result}) => {
    it(`should return ${result} for arr1 = ${arr1} and arr2 = ${arr2}`, function () {
      expect(getUnionArray(arr1, arr2)).to.deep.equal(result);
    });
  });
});
