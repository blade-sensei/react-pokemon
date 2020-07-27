import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <img alt='nav' src='/img/status-bar.png'/>
      <div className='title'>
        Pokemon
      </div>
      <div className='search-bar'>
        <input type='search' placeholder='Search'></input>
      </div>
    </div>
  )
}

export default Header;