import React from 'react';
import './PokemonOverview.css'

const PokemonOverview = (props) => {

  

  return (
    <div className='PokemonDetails'>
      <div className='avatar'>
        <img src='/img/pokemon/avatar.png' alt='avatar'/>
      </div>
      <div className='caracter-info'>
        <span className='caracter-name'>name</span> 
        <span className='caracter-number'>#12</span> 
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