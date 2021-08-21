import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Banner from "./../Element/Index3Slider";

import Header2 from "./../Layout/Header2";
// import Header from "./../Layout/Header";
import Footer2 from "./../Layout/Footer2";

// import Tab from "./../Pages/Tab";
// import Owl2 from "./../Element/Owl2";

// var img1 = require("./../../images/overlay/pt1.jpg");

class Index4 extends Component {
  render() {
    return (
      <div>
        <div className="page-wraper font-barlow">
          <Header2 />

          <Banner />

          {/* <div
            className="section-full content-inner bg-white"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          > */}
          {/* </div> */}
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default Index4;
