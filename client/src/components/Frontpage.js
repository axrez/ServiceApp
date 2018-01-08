import React, { Component } from 'react';

export default class Frontpage extends Component {
  constructor() {
    super();
    this.state = {
      hello: 'hello',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.hello}</p>
      </div>
    );
  }
}
