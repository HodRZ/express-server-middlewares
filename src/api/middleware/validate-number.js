'use strict'

function validateNum(req, res, next) {
    const { num } = req.query;
    if (!isNaN(parseInt(num))) {
        next()
    } else next('input is not a number')
}

module.exports = { validateNum }