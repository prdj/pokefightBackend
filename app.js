const express = require('express');

const app = express();

const port = 8008;

let jsonData = require('./pokefight.json');

app.get('/pokemon', (req, res) => {
    res.json(jsonData)
});

app.listen(port, () => {
    console.log('Listening on port ${port}')
});