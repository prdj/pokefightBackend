const express = require('express');

const pokemonRouter = require('./router')

var cors = require('cors')

const app = express();

app.use(cors());

const port = 8008;

app.use('/pokemon', pokemonRouter )


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});