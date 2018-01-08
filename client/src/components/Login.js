import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login</h1>
        </header>
        <div className="Login-form">
          <input className="Login-username" type="text" value="Username" />
          <input className="Login-password" type="text" value="Password" />
          <button>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default App;
