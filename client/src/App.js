import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from './components/landing/Landing';
import MainPage from './components/mainpage/MainPage'
import Nav from './components/navigation/navigation'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <BrowserRouter>
          <Switch>
            <Route path="/main" component={MainPage} />
            <Route path="/" component={Landing} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
