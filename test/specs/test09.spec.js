const expect = require('chai').expect;

const validatePassword = require('../../tasks/task09');

describe('Tests for task 09. Function validatePassword()', () => {

  const testData = [
    {password: 'Creepy!Passw0rd', result: true},
    {password: 'Welcome123', result: false},
    {password: 'R4nb404uPh?', result: true},
    {password: 'qwerty123', result: false}
  ];

  testData.forEach(({password, result}) => {
    it(`should return ${result} for password = ${password}`, function () {
      expect(validatePassword(password)).to.equal(result);
    });
  });
});
