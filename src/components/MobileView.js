import './MobileView.css';
import Header from './Header';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ListPokemon from './ListPokemon';
import PokemonDetails from './PokemonDetails';

import React from 'react';

function MobileView() {
  return (
    <div className='mobile-container'>
      <div className='mobile-header'>
        <Header/>
      </div>
      <div className='mobile-body'>
        <Router>
          <Link to='/list'>List</Link>
          <Link to='/details'>Details</Link>
          <Route path='/list' component={ListPokemon}/>
          <Route path='/details' component={PokemonDetails}/>  
        </Router>
      </div>
      <div className='mobile-footer'></div>
    </div>
  )
}

export default MobileView;