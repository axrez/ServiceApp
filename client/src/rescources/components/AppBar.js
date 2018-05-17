import React, { Component } from "react";

export default class AppBar extends Component {
  render() {
    return (
      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
          zIndex: 4,
          borderBottom: "1px solid rgb(235, 235, 235)"
        }}
      >
        <h3 style={{ margin: "3%" }}>ZBC</h3>
        <i
          className="material-icons md-36 "
          style={{ margin: "3%" }}
          onClick={this.props.menuHandler}
        >
          menu
        </i>
      </div>
    );
  }
}
