/**
 * You know the results of each of the four quarters of a basketball match. The winner of the game should be
 * determined. The winner is the team, that scores more points than opponent during the whole game.
 *
 * Implement a function getWinner(points) that returns the number of the winning team, or undefined in case of a draw.
 *
 * Examples:
 * getWinner(['18:26', '21:33', '31:30', '27:22']) => 2
 * getWinner(['18:18', '21:21', '31:30', '21:22']) => undefined
 *
 * @param {string[]} points Array of strings with points for every match quarter
 * @returns {(number|undefined)}
 *
 */
function getWinner(points) {
    let teamFirst = [];
    let teamSecond = [];
    let scoreFirstTeam;
    let scoreSecondTeam;

    for (i = 0; i < points.length; i++) {
        let index = points[i].indexOf(':');
        teamFirst.push(points[i].slice(0, index));
        teamSecond.push(points[i].slice(index + 1, points.length + 1));
    }

    scoreFirstTeam = teamFirst.reduce(function (accumulator, currentItem) {
        return accumulator + parseInt(currentItem);
    }, 0);

    scoreSecondTeam = teamSecond.reduce(function (accumulator, currentItem) {
        return accumulator + parseInt(currentItem);
    }, 0);

    if (scoreFirstTeam > scoreSecondTeam) {
        return 1;
    } else if (scoreFirstTeam < scoreSecondTeam) {
        return 2;
    } else {
        return undefined;
    }
}

module.exports = getWinner;
