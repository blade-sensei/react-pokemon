import React from 'react';
import './PokemonOverview.css'

const PokemonOverview = ({pokemon}) => {

  

  return (
    <div className='PokemonOverview'>
      <div className='avatar'>
        <img src={pokemon.imageURL} alt='avatar'/>
      </div>
      <div className='caracter-info'>
        <span className='caracter-name'>{pokemon.name}</span> 
        <span className='caracter-number'>#{pokemon.id}</span> 
      </div>
      <div className='types'>
        <span className='logo'>
          <img src='/img/pokemon/types/leaf.png' alt=''/>
        </span>
        <span className='logo'>
          <img src='/img/pokemon/types/poison.png' alt=''/>
        </span>
      </div>
    </div>
  )
}

export default PokemonOverview;