'use strict'

const { errorHandler } = require("../error-handlers/500");

function validateNum(req, res, next) {
    const { num } = req.query;
    if (!isNaN(parseInt(num))) {
        next()
    } else next('input is not a number')
    // (parseInt(num) != NaN) ? next() : errorHandler()
}

module.exports = { validateNum }