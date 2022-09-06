'use strict'
const { request } = require('../config/testConfig.js')

describe('/, get', () => {
    test('Server is alive', async () => {
        const res = await request.get('/')
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hey Mom!')
    });
});
