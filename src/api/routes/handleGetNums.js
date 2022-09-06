'use strict'

function handelGetNums(req, res, next) {
    const { num } = req.query;
    try {
        const newNum = (parseInt(num) ** 2)
        res.send(newNum.toString())
    } catch (err) { next(err) }
}

module.exports = {
    handelGetNums
}