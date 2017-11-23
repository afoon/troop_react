import React, { Component } from 'react';
import Landing from './components/landing/Landing';
import Nav from './components/navigation/navigation'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="">
      <Nav/>
      <Landing/>
      </div>
    );
  }
}

export default App;
