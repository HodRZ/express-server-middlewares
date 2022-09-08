'use strict'

function validateNum(req, res, next) {
    const { num } = req.query;
    const regex = /\b[0-9][0-9]*\b/g
    if (regex.test(num)) {
        next()
    } else next('input is not a number')
}


module.exports = { validateNum }