'use strict'

const { request } = require('./../config/testConfig')

describe('/square,get', () => {
    test('get request to route delivers data', async () => {
        const res = await request
            .get('/square')
            .query('num=4')
        expect(res.status).toEqual(200)
        expect(res.text).toEqual('16')
    })
    test('Error handler fires', async () => {
        const res = await request
            .get('/square')
            .query('num=h')
        expect(res.status).toEqual(500)
        expect(res.text).toEqual('Server Error : input is not a number :(')
    })
})