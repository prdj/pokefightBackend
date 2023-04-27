const express = require('express');
const router = express.Router();
const { getPokemonById, getPokemonInfo, getPokemon } = require('./pokemonController')

router.get('/', getPokemon)
router.get('/:id,', getPokemonById );
router.get('/:id/:info', getPokemonInfo );

module.exports = router;

