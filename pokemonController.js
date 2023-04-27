const pokemonData = require('./pokefight.json');

exports.getPokemon = (req, res) => {
    res.json(jsonData)
}

exports.getPokemonById = (req, res) => {
    const pokemonId = req.params.id;
  
    const pokemon = pokemonData.find(p => p.id === parseInt(pokemonId));

    if(!pokemon) {
        return res.status(404).send('Pokemon not found');
    }

    res.send(pokemon)

}

exports.getPokemonInfo = (req, res) => {
    const pokemonId = req.params.id;
    const infoType = req.params.info;

    const pokemon = pokemonData.find(p => p.id === parseInt(pokemonId));

    if(!pokemon) {
        return res.status(404).send('Pokemon not found');
    }

    let pokemonInfo;

    switch(infoType){
        case 'name':
            pokemonInfo = pokemon.name;
            break;
        case 'type':
            pokemonInfo = pokemon.type;
            break;
        case 'base':
            pokemonInfo = pokemon.base;
            break;
            default:
                return res.status(400).send(`Invalid info type '${infoType}'`)
    }

    res.send({[infoType]: pokemonInfo})

}