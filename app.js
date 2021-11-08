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
    // 
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name}</h3>
    `;
};