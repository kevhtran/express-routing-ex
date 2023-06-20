const math = require('mathjs')

function findMean(array) {
    let res = math.mean(array)
    return res
}

function findMedian(array) {
    let res = math.median(array)
    return res
}

function findMode(array) {
    let res = math.mode(array)
    return res
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }

        result.push(valToNumber);
    }
    return result;
}

module.exports = { findMean, findMedian, findMode, convertAndValidateNumsArray };
