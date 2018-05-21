import React, { Component } from "react";

export default class AppBar extends Component {
  render() {
    return (
      <div style={{ marginBottom: '70px' }} >
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
          <h3 style={{ margin: "3%" }}>ZBC</h3>
          <i
            className="material-icons md-36 "
            style={{ margin: "3% 6%" }}
            onClick={this.props.menuHandler}
          >
            menu
          </i>
        </div>
      </div>
    );
  }
}
