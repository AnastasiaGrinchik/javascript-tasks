const expect = require('chai').expect;

const isPalindrome = require('../../tasks/task06');

describe('Tests for task 06. Function isPalindrome()', () => {

  const testData = [
    {str: '404', result: true},
    {str: "Madam I'm Adam", result: true},
    {str: 'true', result: false},
    {str: 'Eva, can I see bees in a cave?', result: true},
    {str: 'qwerty123', result: false}
  ];

  testData.forEach(({str, result}) => {
    it(`should return ${result} for str = ${str}`, function () {
      expect(isPalindrome(str)).to.equal(result);
    });
  });
});
