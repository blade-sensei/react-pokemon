import React from 'react';
import logo from './logo.svg';
import './App.css';
import MobileView from './components/MobileView';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ListPokemon from './components/ListPokemon';
import PokemonDetails from './components/PokemonDetails';
import { Provider } from 'react-redux';
import ConfigureStore  from './store';


function App() {
  return (
    <Provider store={ConfigureStore}>
      <div className="App">
          <Router forceRefresh={true}>
            <Switch>
            <Route path='/pokemon' component = {PokemonDetails}/>
              <Route path='/list' component = {ListPokemon}/>
              <Redirect from='/' to='/list'/>
            </Switch>
          </Router>
      </div>
    </Provider>
  );
}

export default App;