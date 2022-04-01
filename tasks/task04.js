/**
 * Peter, Kate and Serge make orizuru (aka paper cranes). Together they made X cranes. How many cranes each child made,
 * if it is known, that Peter and Serge made the same number of cranes, and Kate made at least twice as many cranes as
 * Peter and Serge did together?
 *
 * Implement a function computeCranes(total) that calculates how many cranes each child made.
 *
 * Example:
 * computeCranes(24) => [4, 16, 4]
 *
 * @param {number} total Number of made cranes
 * @returns {number[]} Array of numbers, where the first element is the number of cranes made by Peter, the second
 * element is Kate's cranes, the third is Serge's cranes
 *
 */
function computeCranes(total) {
    let petersCranes = Math.floor(total / 6);
    let katesCranes = total - 2 * petersCranes;
    if (katesCranes > petersCranes * 2) {
        return [petersCranes, katesCranes, petersCranes];
    }
}

module.exports = computeCranes;
