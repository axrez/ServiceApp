import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './rescources/components/ListContainer';
import AppBar from './rescources/components/AppBar';
import ArticleThumb from './rescources/components/ArticleThumb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <ArticleThumb title={"Det sker"} subheader={"Det sker på skolen lige nu"} img={'https://cdn.stocksnap.io/img-thumbs/960w/SD9TQOOKCR.jpg'} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListContainer />
      </div>
    );
  }
}

export default App;
