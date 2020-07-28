import React, { useEffect, useState } from 'react';
import './ListPokemon.css'
import { useHistory } from 'react-router-dom';
import PokemonOverview from './PokemonOverview';
import MobileView from './MobileView';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { search: state.search }
}

const ListPokemonConnected = ({search}) => {
  let history = useHistory();

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
          <div className='pokemon-overview'>
           <PokemonOverview/>
          </div>
      </div>
    ))
  );
  
  return (
    <MobileView>
      { search }
      <div className='ListPokemon'>
        { renderListPokemon(pokemons) }
      </div>
    </MobileView>
  )
}

const ListPokemon = connect(mapStateToProps)(ListPokemonConnected);

export default ListPokemon;