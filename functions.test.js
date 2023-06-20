const { mean, median, mode } = require("./functions.js");

test('mean should return the average', function () {
    let avg = mean([2, 4]);
    expect(avg).toEqual(3);
});

test('median should return the middle number', function () {
    let mid = median([2, 3, 4]);
    expect(mid).toEqual(3);
});

test('mode should most frequent number', function () {
    let freq = mode([2, 3, 4, 6, 7, 8, 5, 4, 3, 2, 4, 5, 6, 6, 6]);
    expect(freq).toEqual([6]);
});