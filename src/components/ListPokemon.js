import React from 'react';
import './ListPokemon.css'
import { useHistory } from 'react-router-dom';
import PokemonOverview from './PokemonOverview';
import MobileView from './MobileView';

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

          <div className='pokemon-overview'>
           <PokemonOverview/>
          </div>
      </div>
    ))
  );
  
  return (
    <MobileView>
      <div className='ListPokemon'>
        { renderListPokemon(pokemons) }
      </div>
    </MobileView>
  )
}

export default ListPokemon;