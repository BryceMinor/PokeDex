// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Number of Pokemon (AKA Objects) in the PokeAPI
const numOfPokemon = 898;

// The createPokeCard function creates a new card (AKA section element) and adds the new card to the webpage/document inside of the div with the id of "container"
// NOTE: The value/argument that will be passed in for the "pokemon" parameter will be the response recieved from an Axios request to the PokeAPI
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// The getPokemonData function makes aan Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function
// NOTE: The argument/value passed into the "id" parameter will be a number created in hte loop in the next function (AKA The getPokemon funciton)
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}