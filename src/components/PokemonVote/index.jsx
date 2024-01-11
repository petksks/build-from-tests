import React, { useState } from 'react';

function PokemonVote() {
  const [pokemons, setPokemons] = useState([
    { name: 'Bulbasaur', votes: 0 },
    { name: 'Charmander', votes: 0 },
    { name: 'Squirtle', votes: 0 },
  ]);

  const handleVote = (index) => {
    const newPokemons = [...pokemons];
    newPokemons[index].votes += 1;
    setPokemons(newPokemons);
  };

  const renderPokemon = (pokemon, index) => (
    <div key={pokemon.name}>
      <h3>{pokemon.name}</h3>
      <p data-testid='vote-count'>Votes: {pokemon.votes}</p>
      <button onClick={() => handleVote(index)}>Vote</button>
    </div>
  );

  const winner = pokemons.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);

  return (
    <div>
      <h2>{winner.name} is in the lead with {winner.votes} votes!</h2>
      {pokemons.map((pokemon, index) => renderPokemon(pokemon, index))}
    </div>
  );
}

export default PokemonVote;
