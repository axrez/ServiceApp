import React, { Component } from "react";
import ArticleThumb from "../components/ArticleThumb";

export default class Frontpage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9fafc"
        }}
      >
        <ArticleThumb
          category={"elevrådet"}
          title={"Elevrådsmøde d. 18-05-18"}
          subheader={
            "Se referatet fra elevrådsmødet der blev afhold d. 18 maj 2018"
          }
          img={"https://cdn.stocksnap.io/img-thumbs/960w/SD9TQOOKCR.jpg"}
        />
        <ArticleThumb
          category={"Festudvalget"}
          title={"Festplan 2018"}
          subheader={"Nu er planen for de kommende fester klar"}
          img={"https://cdn.stocksnap.io/img-thumbs/960w/9MS3AC9IKD.jpg"}
        />
        <ArticleThumb 
          category={"workshops"}
          title={"Tilmelding til Arduino er åben!"}
          subheader={"Tilmeldingen til Arduino-workshoppen er åben. Sidste tilmældingsdato er d. 23 August"}
          img={"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftag.hexagram.ca%2Fwp-content%2Fuploads%2FArduino.png&f=1"}
        />
      </div>
    );
  }
}
