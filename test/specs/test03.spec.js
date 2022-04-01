const expect = require('chai').expect;

const checkTicket = require('../../tasks/task03');

describe('Tests for task 03. Function checkTicket()', () => {

  const testData = [
    {number: '123321', result: true},
    {number: '987654', result: false},
    {number: '777696', result: true},
    {number: '034141', result: false}
  ];

  testData.forEach(({number, result}) => {
    it(`should return ${result} for ticket with number = ${number}`, function () {
      expect(checkTicket(number)).to.equal(result);
    });
  });
});
