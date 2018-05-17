import React, { Component } from 'react'

export default class ArticleThumb extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.subheader}</p>
        <img src={this.props.img} alt={this.props.title} style={{ maxWidth: '80%', maxHeight: '80%' }}/>
      </div>
    )
  }
}
