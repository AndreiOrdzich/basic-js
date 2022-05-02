const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let columnCount = matrix[0].length;
    let number = 0;
    let arr2 = [];

    for (var i = 0; i < columnCount; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break
            }
            arr2.push(matrix[j][i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        number += arr2[i]
    }
    return number;

}

module.exports = {
    getMatrixElementsSum
};