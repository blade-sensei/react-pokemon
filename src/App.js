import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ListPokemon from './components/ListPokemon';
import PokemonDetails from './components/PokemonDetails';
import { Provider } from 'react-redux';
import ConfigureStore  from './store';


function App() {
  return (
    <Provider store={ConfigureStore}>
      <div className="App">
          <Router>
            <Switch>
              <Route path='/pokemon' component = {PokemonDetails}/>
              <Route path='/' component = {ListPokemon}/>
            </Switch>
          </Router>
      </div>
    </Provider>
  );
}

export default App;