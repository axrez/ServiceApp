import React, { Component } from "react";

export default class ArticleThumb extends Component {
  render() {
    return (
      <div>
        <h4
            id="article-thumb"
            style={{
              margin: "70% 0 0 2%",
              padding: "1.5% 4%",
              backgroundColor: "#ff565c",
              position: 'absolute',
              textTransform: 'uppercase',
              color: '#fff',
              fontSize: '1.4rem',
              fontFamily: 'Oswald SemiBold, Tahoma, Geneva, Verdana, sans-serif'
            }}
          >
            {this.props.title}
          </h4>
      <div>
         <img src={this.props.img} alt={this.props.title} style={{ zIndex: '-1', maxWidth: '90%', alignSelf: 'center' }} />
        <p>{this.props.subheader}</p>
      </div>
      </div>
    );
  }
}
