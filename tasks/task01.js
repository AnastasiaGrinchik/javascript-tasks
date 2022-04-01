/**
 * Implement a function sum(n) that returns a positive integer value — the sum of numbers, between 1 and n inclusive.
 *
 * Examples:
 * sum(0) => 1
 * sum(5) => 15
 *
 * @param {number} n Integer number
 * @returns {number}
 *
 */
function sum(number) {
    if (number < 0) {
        return 1;
    } else {
        let arr = [];
        for (let i = 1; i <= number; i++) {
            arr.push(i);
        }

        return arr.reduce(function (accumulator, currentItem) {
            return accumulator + currentItem;
        });
    }
}

module.exports = sum;
