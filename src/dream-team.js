const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {


    let member = '';
    let arr2 = [];

    for (var i = 0; i < members.length; i++) {
        for (var j = 0; j < members[i].length; j++) {
            if (typeof(members[i][j]) === 'string') {
                (members[i][j]).substr(0, 1);
                arr2.push(members[i][j]);
                break;
            } else {
                return false;
            }
        }
    }
    member = arr2.sort().join('').toUpperCase();
    return member;
}



module.exports = {
    createDreamTeam
};