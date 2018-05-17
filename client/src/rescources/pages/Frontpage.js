import React, { Component } from "react";
import ArticleThumb from '../components/ArticleThumb';

export default class Frontpage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <ArticleThumb
          title={"Det sker"}
          subheader={"Det sker på skolen lige nu"}
          img={"https://cdn.stocksnap.io/img-thumbs/960w/SD9TQOOKCR.jpg"}
        />
      </div>
    );
  }
}
