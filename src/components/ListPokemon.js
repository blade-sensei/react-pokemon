import React from 'react';
import './ListPokemon.css'
import { useHistory } from 'react-router-dom';

const ListPokemon = (props) => {
  let history = useHistory();
  console.log(props);

  const redirectToPokemonOverview = (pokemon) => {
    //
    console.log(pokemon);
    history.push('/pokemon', pokemon);
  }

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
      <div className='pokemon-overview' onClick={() => redirectToPokemonOverview(pokemon) }>
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