import React from 'react';
import './ListPokemon.css'

const ListPokemon = () => {
  const pokemons = [
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    {'name': 'pikachu'},
    {'name': 'bulbazor'},
    
  ];
  const renderListPokemon = (pokemons) => (
    pokemons.map((pokemon) => (
      <div className='pokemon-overview'>
        this is pokemon { pokemon.name }
      </div>
    ))
  );
  
  return (
    <div className='ListPokemon'>
      { renderListPokemon(pokemons) }
    </div>
  )
}

export default ListPokemon;