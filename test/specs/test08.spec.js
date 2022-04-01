const expect = require('chai').expect;

const decrypt = require('../../tasks/task08');

describe('Tests for task 08. Function decrypt()', () => {

  const testData = [
    {
      secret: 'Qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald',
      shift: -3,
      result: 'The quick brown fox jumps over the lazy dog'
    },
    {
      secret: 'Dc iwt hxmiw du Yjct dc iwt hwdgth du lthitgc Tjgdet S-spn jedc jh',
      shift: 15,
      result: 'On the sixth of June on the shores of western Europe D-day upon us'
    },
    {
      secret: 'spwwz hzcwo',
      shift: 11,
      result: 'hello world'
    }
  ];

  testData.forEach(({secret, shift, result}) => {
    it(`should return "${result}" for secret = "${secret}" and shift = ${shift}`, function () {
      expect(decrypt(secret, shift)).to.deep.equal(result);
    });
  });
});
