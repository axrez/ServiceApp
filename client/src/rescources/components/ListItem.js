import React, { Component } from 'react'
import "./ListItem.css"

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  
  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })      
  }

  render() {
    return (
      <div className={this.state.visible ? "container extended" : "container"} onClick={this.toggleVisibility} >
        <h3>{this.props.title}</h3>
        <p>This is hidden by default</p>
      </div>
    )
  }
}

