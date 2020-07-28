import React, { useState, useEffect } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { searching } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    search: search => dispatch(searching(search)),
  }
}

const  ConnectedHeader = ({search}) => {

  const [searchUserEntry, setSearchUserEntry] = useState('');

  const updateSearch = (e) => {
    setSearchUserEntry(e.target.value);
  }

  useEffect(() => {
    console.log(searchUserEntry);
    search(searchUserEntry);
  }, [searchUserEntry, search])

  return (
    <div className='Header'>
      <img alt='nav' src='/img/status-bar.png'/>
      <div className='title'>
        Pokemon
      </div>
      <div className='search-bar'>
        <input type='search' placeholder='Search' value={searchUserEntry} onChange={updateSearch}/>
      </div>
    </div>
  )
}


const Header = connect(null, mapDispatchToProps)(ConnectedHeader);

export default Header;