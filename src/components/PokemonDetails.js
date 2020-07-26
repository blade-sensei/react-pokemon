import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = () => (
  <div className='PokemonDetails'>
    <div className="container">
      <div className="pokemon-details">
      <div className="pokemon-avatar">
        <img src="/img/pokemon/avatar/pokemon.png" alt="pokemon avatar" />
      </div>
        <h2 className="name">
          Squirtle
        </h2>
        <div className="description">
          Squirtle’s shell is not merely used for protection.
          The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this pokemon to swim at high speed.
      </div>
      </div>
    </div>
  </div>
);


export default PokemonDetails;
