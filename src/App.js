import React from 'react';
import logo from './logo.svg';
import './App.css';
import MobileView from './components/MobileView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MobileView/>
      </header>
    </div>
  );
}

export default App;