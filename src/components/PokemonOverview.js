import React from 'react';
import './PokemonOverview.css'

const PokemonOverview = ({pokemon}) => {

  const renderTypes = () => (
    pokemon.types.map((typeItem) => (
      <span className='logo'>
        <img src={`/img/pokemon/types/${typeItem.type.name}.png`} alt="type"/>
      </span>
    ))
  )

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
        { renderTypes() }
      </div>
    </div>
  )
}

export default PokemonOverview;