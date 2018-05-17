import React, { Component } from 'react';
import ListItem from './ListItem';
import AppBar from './AppBar';

export default class componentName extends Component {
  render() {
    const list = []
    for(let i = 0; i < 10; i++){
      list.push(<ListItem title={i*10+10} key={i} />)
    }
    
    return (
      <div>
        <AppBar />
       {list}    
      </div>
    )
  }
}
