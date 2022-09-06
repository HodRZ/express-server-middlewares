'use strict'


const cors = require('cors');
const express = require('express');
const { errorHandler } = require('./api/error-handlers/500');
const { validateNum } = require('./api/middleware/validate-number');
const { handelGetNums } = require('./api/routes/handleGetNums');
const app = express();

const { errorHandler } = require('./api/error-handlers/500');
const { validateNum } = require('./api/middleware/validate-number');
const { handelGetNums } = require('./api/routes/handleGetNums');


app.use(cors());
app.use(express.json());

function radio(port) {
    app.listen(port, () => {
        console.log(`Diamond City Radio ${port}`)
    })
}

app.get('/', (req, res) => {
    res.status(200).send('Hey Mom!')
})


app.get('/square', validateNum, handelGetNums)
app.use(errorHandler)

module.exports = { app, radio }