/**
 * A password is crypto-resistant if it includes at least one lowercase English letter, at least one uppercase English
 * letter, at least one number, at least one specific symbol, and it must be at least 8 characters long.
 *
 * Implement a function validatePassword(password) that that determines if the password you send is crypto-resistant.
 *
 * Examples:
 * validatePassword('R4nb404uPh?') => true
 * validatePassword('password') => false
 *
 * @param {string} password Password to check
 * @returns {boolean}
 *
 */
function validatePassword(password) {
    if (password.length > 8) {
        if (
            password.search(/[a-z]/g) !== -1 &&
            password.search(/[A-Z]/g) !== -1 &&
            password.search(/[0-9]/g) !== -1 &&
            password.search(/[\[\]\\^\$\.\|\?\!\*\+\(\)]/g) != -1
        ) {
            return true;
        }
        return false;
    }
    return false;
}

module.exports = validatePassword;
