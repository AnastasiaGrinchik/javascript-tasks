/**
 * Implement a function getUnionArray(arr1, arr2) that returns an array ordered in descending order consisting of
 * numbers from both arrays from parameters.
 *
 * Examples:
 * union([1, 1, 3, 2, 5], [5, 3, 1, 7, 7]) => [5, 3, 1]
 * union([1, 2, 3], [11, 0, -1]) => []
 *
 * @param {number[]} arr1 First array of numbers
 * @param {number[]} arr2 Second array of numbers
 * @returns {number[]} Resulting array of number
 *
 */
function getUnionArray(arr1, arr2) {
    let arr = [];
    arr2.forEach(function (item) {
        if (arr1.includes(item)) {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        } else {
            return [];
        }
    });
    return arr.sort(function (a, b) {
        return b - a;
    });
}

module.exports = getUnionArray;
