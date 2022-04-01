/**
 * Implement a function getTimeDelta(x, y) that determines, how many seconds have passed between two points in time
 * x and y. The time is passed in 'HH:MM:SS' format. Minimum value is '00:00:00', maximum value is '23:59:59'. By
 * default, x is always less than y.
 *
 * Example:
 * getTimeDelta('01:01:01', '02:02:03') => 3662
 *
 * @param {string} x First time point
 * @param {string} y Second time point
 * @returns {number} Time delta in seconds between x and y
 *
 */
function getTimeDelta(x, y) {
    let yString = y.replace(/\:/g, '');
    let xString = x.replace(/\:/g, '');
    if (
        yString > '000000' &&
        yString > '000000' &&
        xString <= 235959 &&
        xString <= 235959 &&
        yString > xString
    ) {
        function getArray(arr) {
            arr = arr.split(':');
            return arr.map(function (item) {
                return parseInt(item);
            });
        }
        x = getArray(x);
        y = getArray(y);

        let hours = (y[0] - x[0]) * 60 * 60;
        let minutes = (y[1] - x[1]) * 60;
        let seconds = y[2] - x[2];

        return hours + minutes + seconds;
    }
}

module.exports = getTimeDelta;
