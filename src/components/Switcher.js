import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddCharacter from './AddCharacter';
import CharacterDetails from './CharacterDetails';

class Switcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/character-card/form" component={AddCharacter} />
        <Route path="/character-card/:id" component={CharacterDetails} />
        <Route exact path="/character-card/" component={Home} />
      </Switch>
    );
  }
}

export default Switcher;