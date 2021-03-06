import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Router from '../../routers/Router';
import 'whatwg-fetch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router />
      </div>
    );
  }
}

export default App;
