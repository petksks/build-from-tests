import React from 'react';

function CalculateWinner({ bulbasaurVote, charmanderVote, squirtleVote }) {
  const getWinnerText = () => {
    if (bulbasaurVote === 0 && charmanderVote === 0 && squirtleVote === 0) {
      return 'Voting has not started yet';
    }

    const votes = { Bulbasaur: bulbasaurVote, Charmander: charmanderVote, Squirtle: squirtleVote };
    const highestVotes = Math.max(bulbasaurVote, charmanderVote, squirtleVote);
    const leadingPokemons = Object.entries(votes).filter(([_, vote]) => vote === highestVotes).map(([name, _]) => name);

    if (leadingPokemons.length > 1) {
      return `Tie between ${leadingPokemons.join(' and ')} - each with ${highestVotes} votes!`;
    } 
    return `${leadingPokemons[0]} leads with ${highestVotes} votes!`;
  };

  return (
    <div>
      <h2>{getWinnerText()}</h2>
    </div>
  );
}

export default CalculateWinner;
