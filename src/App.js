import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Skill from './components/Skill';
import Cards from './components/Cards';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Jumbo />
        <Skill />
        <Cards />
      </div>
    );
  }
}

export default App;

