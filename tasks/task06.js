/**
 * Implement a function isPalindrome(str) function that determines, if the passed string in is a palindrome (a string,
 * that reads equally from left to right and right to left).
 *
 * Examples:
 * isPalindrome('121') => true
 * isPalindrome('true') => false
 * isPalindrome("Madam I'm Adam") => true
 *
 * @param {string} str String to check
 * @returns {boolean}
 *
 */
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\s?,']/g, '');
    let strReverse = str.split('').reverse().join('');

    return str === strReverse;
}

module.exports = isPalindrome;
