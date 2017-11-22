import React, { Component } from 'react';
import Login from './components/login/login';
import Nav from './components/navigation/navigation'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="">
      <Nav/>
      <Login/>
      </div>
    );
  }
}

export default App;
