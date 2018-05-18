import React, { Component } from "react";
import ArticleThumb from '../components/ArticleThumb';

export default class Frontpage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafc' }} >
        <ArticleThumb
          category={"elevrådet"}
          title={'Elevrådsmøde d. 18-05-18'}
          subheader={"Se referatet fra elevrådsmødet der blev afhold d. 18 maj 2018"}
          img={"https://cdn.stocksnap.io/img-thumbs/960w/SD9TQOOKCR.jpg"}
        />
        <ArticleThumb
          category={"Festudvalget"}
          title={"Festplan 2018"} 
          subheader={"Nu er planen for de kommende fester i 2018 klar"}
          img={"https://cdn.stocksnap.io/img-thumbs/960w/9MS3AC9IKD.jpg"}
          />
      </div>
    );
  }
}
