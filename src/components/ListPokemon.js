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
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await fetchPokemons()
    }
    fetch();
  }, [search])

  const redirectToPokemonOverview = (pokemon) => {
    //
    console.log(pokemon);
    history.push('/pokemon', pokemon);
  }

  const fetchPokemons = async () => {
    let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    pokemons = await pokemons.json();
    pokemons = pokemons.results;
    pokemons = await Promise.all(pokemons.map(async (pokemon) => {
      let data = await fetch(pokemon.url);
      data = await data.json();
      pokemon.data = data;
      return pokemon;
    }))
    setPokemons(pokemons);
  }

  
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
      <div className='ListPokemon'>
        { renderListPokemon(pokemons) }
      </div>
    </MobileView>
  )
}

const ListPokemon = connect(mapStateToProps)(ListPokemonConnected);

export default ListPokemon;