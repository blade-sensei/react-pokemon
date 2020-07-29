import React from 'react';
import './PokemonDetails.css';
import colors from '../consts/types.color';

const PokemonDetails = ({location}) => {

const pokemon = location.pokemon;

console.log(colors);
const renderTypes = () => (
  pokemon.types.map((typeItem) => (
    <span className='logo' style={styleColor(typeItem.type.name)}>
      <img src={`/img/pokemon/types/${typeItem.type.name}.png`} alt=""/>
  <span className="type">{typeItem.type.name}</span>
    </span>
  ))
)

const styleColor = (type) => {
  console.log(colors[type]);
  const color = `#${colors[type]}`
  return {
    backgroundColor: color,
  }
}

const pokemonBackgroundColor = () => {
  const [type] = pokemon.types;
  return styleColor(type.type.name);
}
  
return (
  <div className='PokemonDetails' style={pokemonBackgroundColor()}>
    <div className="container">
      <div className="pokemon-details">
      <div className="pokemon-avatar">
        <img src={pokemon.imageURL} alt="pokemon avatar" />
      </div>
        <h2 className="name">
          {pokemon.name}
        </h2>
        <div className="types-logo">
          { renderTypes()}
        </div>
        <div className="description">
          Squirtle’s shell is not merely used for protection.
          The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this pokemon to swim at high speed.
        </div>
        <img className='stats' src="/img/stats.png" alt=""/>
      </div>
    </div>
  </div>
);

}

export default PokemonDetails;
