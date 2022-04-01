/**
 * The simplest encryption method is the Caesar Cipher. It works on the principle of shifting letters. It is a type of
 * substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions
 * down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on.
 *
 * You were sent a secret message encrypted with the Caesar cipher with shifting (by default we use English
 * alphabet). More info: https://en.wikipedia.org/wiki/Caesar_cipher and https://cryptii.com/pipes/caesar-cipher
 *
 * Implement a function decrypt(secret, shift) that will decrypt it and return it.
 *
 * Example:
 * decrypt('Qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald', -3) => 'The quick brown fox jumps over the lazy dog'
 * decrypt('spwwz hzcwo', 11) => 'hello world'
 *
 * @param {string} secret Encrypted message
 * @param {number} shift Number of a shift
 * @returns {string} Decrypted message
 *
 */
function decrypt(secret, shift) {
    let resultWords = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shiftAlphabet = '';
    let item;
    let otherSymbols = '- ';
    shift = shift * -1;

    shiftAlphabet = alphabet.slice(shift);
    shiftAlphabet += alphabet.slice(0, shift);
    shiftAlphabet += otherSymbols;
    alphabet += otherSymbols;

    for (let i = 0; i < secret.length; i++) {
        let currentIndex;
        if (alphabet.indexOf(secret[i]) === -1) {
            currentIndex = alphabet.toLowerCase().indexOf(secret[i]);
            item = shiftAlphabet[currentIndex].toLowerCase();
        } else {
            currentIndex = alphabet.indexOf(secret[i]);
            item = shiftAlphabet[currentIndex];
        }

        resultWords += item;
    }
    return resultWords;
}
module.exports = decrypt;
