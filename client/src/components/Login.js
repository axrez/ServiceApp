import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        username: '',
        password: '',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login</h1>
        </header>
        <div className="Login-form">
          <input
            className="Login-username"
            type="text"
            placeholder="Username"
            value={this.state.input.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            className="Login-password"
            type="text"
            placeholder="Password"
            value={this.state.input.password}
            onChange={this.handleChange}
          />
          <br />
          <button>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
