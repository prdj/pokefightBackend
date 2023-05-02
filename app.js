const express = require('express');

const pokemonRouter = require('./router')

var cors = require('cors')

const app = express();

const port = 4000;

app.use(cors());

app.use('/pokemon', pokemonRouter )


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
