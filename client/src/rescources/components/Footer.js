import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();

    this.newsletterSignup = this.newsletterSignup.bind(this);
  }

  newsletterSignup = e => {
    e.preventDefault();
    console.log("Email submitted");
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1d1f24",
          padding: "2%  0 3% 0"
        }}
      >
        <h3 style={{ margin: "3%" }}>ZBC</h3>
        <div style={{ color: "#fff", fontSize: "0.8rem" }}>
          <p>&#169; {new Date().getFullYear()} ZBC</p>
        </div>
        <form onSubmit={this.newsletterSignup} style={{ margin: "0.5rem" }}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your E-mail"
            style={{
              border: "none",
              padding: "1.5% 4%",
              fontFamily: "Oswald, Tahoma, Geneva, Verdana, sans-serif",
              width: "40vw"
            }}
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            style={{
              padding: "1.5% 5%",
              border: "none",
              backgroundColor: "#ff565c",
              color: "#fff",
              fontFamily: "Oswald, Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 400
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Lato, Tahoma, Geneva, Verdana, sans-serif",
              color: "#cdcdce",
            }}
          >
            Social media:
          </p>
          <a
            href="https://www.facebook.com/ElevradetPaSelandiaHhxHtx/"
            style={{ marginLeft: "0.5rem", fontSize: "15pt" }}
          >
            <i className="fa fa-facebook" style={{ color: "#616366" }} />
          </a>
          <a
            href="https://twitter.com/login/"
            style={{ marginLeft: "0.5rem", fontSize: "17.5pt" }}
          >
            <i className="fa fa-twitter" style={{ color: "#616366" }} />
          </a>
          <a href="https://www.zbc.dk/" style={{ marginLeft: "0.5rem" }}>
            <i
              className="material-icons"
              style={{ color: "#616366", marginTop: "0.15rem", padding: 0 }}
            >
              language
            </i>
          </a>
        </div>
      </div>
    );
  }
}
