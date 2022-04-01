/**
 * A "lucky ticket" is a ticket with a six-digit number, where the sum of the first three digits equals to
 * the sum of the last three.
 *
 * Implement a function checkTicket(number) that checks if the ticket is lucky.
 *
 * Examples:
 * checkTicket('005212') => true
 * checkTicket('133700') => true
 * checkTicket('123032') => false
 *
 * @param {string} number Number of ticket
 * @returns {boolean}
 *
 */
function checkTicket(number) {
    let arr = number.split('');

    let resultFirst = arr.reduce((accumulator, currentItem, index) => {
        return index < 3 ? accumulator + parseInt(currentItem) : accumulator;
    }, 0);

    let resultSecond = arr.reduce((accumulator, currentItem, index) => {
        return index >= 3 ? accumulator + parseInt(currentItem) : accumulator;
    }, 0);

    return resultFirst === resultSecond;
}

module.exports = checkTicket;
