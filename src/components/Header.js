import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <div className='title'>
        Pokemon
      </div>
      <div className='search-bar'>
        <input type='search'></input>
      </div>
    </div>
  )
}

export default Header;