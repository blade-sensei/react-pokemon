import './MobileView.css';
import Header from './Header';

import React from 'react';

function MobileView({children}) {
  return (
    <div className='mobile-container'>
      <div className='mobile-header'>
        <Header/>
      </div>
      <div className='mobile-body'>
        {children}
      </div>
      <div className='mobile-footer'>
        <div className="navigation-item">
          <img src="img/pokemon/navigation.png" alt="" className="item"/>
          <span className="item-name">Pokemons</span>
        </div>
      </div>
    </div>
  )
}

export default MobileView;