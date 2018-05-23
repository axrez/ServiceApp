import React, { Component } from "react";

export default class AppBar extends Component {
  render() {
    return (
      <div style={{ marginBottom: "70px" }}>
        <div
          className="Container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
            width: "100vw",
            zIndex: 4,
            borderBottom: "1px solid rgb(235, 235, 235)",
            position: "fixed",
            top: 0,
            backgroundColor: "#fff",
            marginBottom: "70px"
          }}
        >
          <div
            style={{
              margin: "3%",
              fontFamily: "Lato Bold, Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "1.5rem",
              width: "50vw"
            }}
          >
              <h3
                style={{
                  fontWeight: 500,
                  margin: 0,
                  display: "inline-block",
                  color: "#1d1f24"
                }}
              >
                ZBC
              </h3>
              <p
                style={{
                  margin: 0,
                  display: "inline-block",
                  fontSize: "1.3em",
                  color: "#ff565c"
                }}
              >
                .
              </p>
          </div>
          <i
            className="material-icons md-48"
            style={{ margin: "3% 6%", fontSize: "36px" }}
            onClick={this.props.menuHandler}
          >
            menu
          </i>
        </div>
      </div>
    );
  }
}
