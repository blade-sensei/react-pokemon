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
      <div className='mobile-footer'></div>
    </div>
  )
}

export default MobileView;