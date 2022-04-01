const expect = require('chai').expect;

const computeCranes = require('../../tasks/task04');

describe('Tests for task 04. Function computeCranes()', () => {
    const testData = [
        { total: 6, cranes: [1, 4, 1] },
        { total: 24, cranes: [4, 16, 4] },
        { total: 11, cranes: [1, 9, 1] },
    ];

    testData.forEach(({ total, cranes }) => {
        it(`should return ${cranes} for total number of cranes = ${total}`, function () {
            expect(computeCranes(total)).to.deep.equal(cranes);
        });
    });
});
