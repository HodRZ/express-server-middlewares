'use strict'


const cors = require('cors');
const express = require('express');
const app = express();


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

module.exports = { app, radio }