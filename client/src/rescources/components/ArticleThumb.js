import React, { Component } from "react";

export default class ArticleThumb extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
          width: '100%'
        }}
      >
        <h4
          id="article-thumb"
          style={{
            margin: "45% 0 0 2.6%",
            padding: "1.5% 4%",
            backgroundColor: "#ff565c",
            position: "absolute",
            textTransform: "uppercase",
            color: "#fff",
            fontSize: "1rem",
            fontFamily: "Oswald SemiBold, Tahoma, Geneva, Verdana, sans-serif",
            alignSelf: "flex-start"
          }}
        >
          {this.props.category}
        </h4>
        <img
          src={this.props.img}
          alt={this.props.title}
          style={{   maxWidth: "90vw", alignSelf: "center" }}
        />
        <div style={{ alignItems: 'flex-start', margin: '0 4vw 3% 4vw', maxWidth: '90vw', width: '100%' }} >
          <h3
            style={{ 
              fontFamily: "Lato Semibold, Tahoma, Geneva, Verdana, sans-serif",
              fontSize: '1.2rem',
              fontWeight: '600',
              margin: '3% 0 1% 0'
          }}
          >
            {this.props.title}
          </h3>
          <p 
            style={{
              fontFamily: "Lato regular, Tahoma, Geneva, Verdana, sans-serif",
              color: '#5f6165',
              margin: '0 0 5% 0'
            }}
          >
            {this.props.subheader}
          </p>
        </div>
      </div>
    );
  }
}
