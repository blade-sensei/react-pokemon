import React, { useEffect, useState } from 'react';
import './ListPokemon.css'
import { useHistory } from 'react-router-dom';
import PokemonOverview from './PokemonOverview';
import MobileView from './MobileView';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

const mapStateToProps = state => {
  return { search: state.search }
}

const ListPokemonConnected = ({search}) => {

  let history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const renderLoaderSpinner = () => {
    return (
      <div className='spinner'>
        <Loader
          type='Rings'
          color='#1D8696'
          height={40}
          width={40} /> 
      </div>
    )
  }

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      if (search) {
        const filter = pokemons.filter((pokemon) => {
          return pokemon.name.startsWith(search.toLowerCase());
        })
        setSearchPokemons(filter);
      } else {
        await fetchPokemons()
      }
      setIsLoading(false);
    }
    fetch();
  }, [search])

  const redirectToPokemonOverview = (pokemon) => {
    //
    history.push({
      pathname: '/pokemon',
      pokemon:  pokemon
    });
  }



  const fetchPokemons = async () => {
    let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    pokemons = await pokemons.json();
    pokemons = pokemons.results;
    pokemons = await Promise.all(pokemons.map(async (pokemon) => {
      let data = await fetch(pokemon.url);
      data = await data.json();
      const {types, id, name} = data;
      
      const imageURL = getPokemonImageURL(id);
      data = {
        id,
        name,
        types,
        imageURL,
        description: ''
      }
      return data;
      
    }))
    setPokemons(pokemons);
    setSearchPokemons([...pokemons]);
  }

  const  getPokemonImageURL = (number) => {
    return `https://pokeres.bastionbot.org/images/pokemon/${number}.png`;
  }

  
  const renderListPokemon = () => (
    searchPokemons.map((pokemon) => (
      <div className='pokemon-overview' onClick={() => redirectToPokemonOverview(pokemon) }>
          <div className='pokemon-overview'>
           <PokemonOverview pokemon={pokemon}/>
          </div>
      </div>
    ))
  );
  
  return (
    <MobileView>
      <div className='ListPokemon'>
        { isLoading === true ? renderLoaderSpinner() : renderListPokemon()
         }
      </div>
    </MobileView>
  )
}

const ListPokemon = connect(mapStateToProps)(ListPokemonConnected);

export default ListPokemon;