import React from 'react';
import logo from './logo.svg';
import './App.css';
import MobileView from './components/MobileView';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import ListPokemon from './components/ListPokemon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router forceRefresh={true}>
          <Switch>
          <Route path='/pokemon' component = {PokemonDetails}/>
            <Route path='/list' component = {ListPokemon}/>
            <Redirect from='/' to='/list'/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;