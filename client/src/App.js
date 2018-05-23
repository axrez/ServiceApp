import React, { Component } from 'react';
import './App.css';
import AppBar from './rescources/components/AppBar';
import Frontpage from './rescources/pages/Frontpage';
import Footer from './rescources/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Frontpage />
        <Footer />
      </div>
    );
  }
}

export default App;
