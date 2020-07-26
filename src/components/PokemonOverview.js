import React from 'react';
import './PokemonOverview.css'

const PokemonOverview = (props) => {

  

  return (
    <div className='PokemonOverview'>
      <div className='avatar'>
        <img src='/img/pokemon/avatar.png' alt='avatar'/>
      </div>
      <div className='caracter-info'>
        <sp className='caracter-name'>name</sp> 
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