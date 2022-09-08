'use strict'

function validateNum(req, res, next) {
    const { num } = req.query;
    const regex = /^\d+$/
    if (regex.test(num)) {
        next()
    } else next('input is not a number')
}


module.exports = { validateNum }