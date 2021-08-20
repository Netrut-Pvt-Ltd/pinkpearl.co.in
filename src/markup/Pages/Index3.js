import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./../Element/Ravslider";

// import Header2 from "./../Layout/Header2";
import Header from "./../Layout/Header";
import Footer2 from "./../Layout/Footer2";
import Tab from "./../Pages/Tab";
import Owl2 from "./../Element/Owl2";

var img1 = require("./../../images/overlay/pt1.jpg");

class Index3 extends Component {
  render() {
    return (
      <div>
        <div className="page-wraper font-barlow">
          <Header />

          {/* <Banner /> */}

          <div
            className="section-full content-inner bg-white"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          >
            {/* <Tab /> */}
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default Index3;
