import React from 'react';
import './PokemonDetails.css'

const PokemonDetails = (props) => {

  console.log(props.location.state);

  return (
    <div className='PokemonDetails'>
      <div className='avatar'>
        <img src='' alt='avatar'/>
      </div>
      <div className='caracter-info'>
        <div className='caracter-name'>name</div> 
        <div className='caracter-number'> #12</div> 
      </div>
      <div className='types'>
        <span className='logo'>
          <img src='/img/leaf.png' alt=''/>
        </span>
        <span className='logo'>
          <img src='/img/poison.png' alt=''/>
        </span>
      </div>
    </div>
  )
}

export default PokemonDetails;