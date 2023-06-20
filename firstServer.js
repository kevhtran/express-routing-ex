const express = require('express');
const ExpressError = require('./expressError.js')
const app = express();

app.use(express.json());
const { findMean, findMedian, findMode, convertAndValidateNumsArray } = require("./functions.js");


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    console.log(result)
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "median",
        result: findMedian(nums)
    }
    console.log(result)
    return res.send(result);
})

app.get('/mode', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mode",
        result: findMode(nums)
    }
    console.log(result)
    return res.send(result);
})

// should always be at the bottom of the file
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass the error to the next piece of middleware
    return next(err);
});
app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message;
    return res.status(status).json({ error: { message, status } })
})
app.listen(3000, function () {
    console.log('App on port 3000')
})

