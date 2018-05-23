import React, { Component } from "react";

const categories = ["elevrådet", "festudvalget", "workshops"];

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
    const categoriesList = categories.map((category, index) => (
      <h4
        style={{
          key: index,
          textTransform: "uppercase",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "Oswald Semi-Bold, Tahoma, Geneva, Verdana, sans-serif",
          margin: "1rem 0"
        }}
      >
        {category}
      </h4>
    ));

    return (
      <div
        style={{
          backgroundColor: "#1d1f24",
          padding: "2rem  0.5rem 3% 4.5%",
        }}
      >
        <div style={{ fontSize: "1.3rem" }}>
          <h3
            style={{
              fontWeight: 500,
              margin: 0,
              display: "inline-block",
              color: "#616265"
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
        <div style={{ color: "#fff", fontSize: "0.8rem", margin: '0.7rem 0 1.2rem 0'  }}>
          <p style={{ margin: 0}} >&#169; {new Date().getFullYear()} ZBC</p>
          <p style={{ margin: 0}} >Nyhedsside ZBC Slagelse</p>
        </div>
        <form onSubmit={this.newsletterSignup} style={{ margin: "1.5rem 0" }}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your E-mail"
            style={{
              border: "none",
              padding: "1.5% 4%",
              fontFamily: "Oswald, Tahoma, Geneva, Verdana, sans-serif",
              width: "45vw",
              fontSize: '1.15rem',
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
              fontWeight: 400,
              fontSize: '1.15rem'
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: '1.2rem 0'
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Lato, Tahoma, Geneva, Verdana, sans-serif",
              color: "#cdcdce"
            }}
          >
            Social media:
          </p>
          <a
            href="https://www.facebook.com/ElevradetPaSelandiaHhxHtx/"
            style={{ marginLeft: "1.4rem", fontSize: "15pt" }}
          >
            <i className="fa fa-facebook" style={{ color: "#616366" }} />
          </a>
          <a
            href="https://twitter.com/login/"
            style={{ marginLeft: "1.4rem", fontSize: "17.5pt" }}
          >
            <i className="fa fa-twitter" style={{ color: "#616366" }} />
          </a>
          <a href="https://www.zbc.dk/" style={{ marginLeft: "1.2rem" }}>
            <i
              className="material-icons"
              style={{ color: "#616366", marginTop: "0.15rem", padding: 0 }}
            >
              language
            </i>
          </a>
        </div>{" "}
        {/* social media links end */}
        <div
          className="catergoriesContainer"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: '90%' }}
        >
          {categoriesList}
        </div>
      </div>
    );
  }
}
