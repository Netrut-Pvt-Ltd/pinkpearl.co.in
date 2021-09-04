import React, { Component } from "react";

import { Link } from "react-router-dom";
// import GoogleMaps from "simple-react-google-maps";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";

var bgimg1 = require("./../../images/main-slider/pink-slider1.jpg");
// var bgimg2 = require("./../../images/background/bg5.jpg");

class Career extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle"
            style={{ backgroundImage: "url(" + bgimg1 + ")" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Career</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"./"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Career</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="career-text">
            <div className="container text-center">
              <h3>For Job Applications Enquire us at: 0141 – 5166000</h3>
              <h5>OR</h5>
              <h3>
                Send your Resume at{" "}
                <a href="#" style={{ color: "#5fcac7" }}>
                  {" "}
                  hr@chokhidhani.com
                </a>
              </h3>
            </div>
          </div>

          <div className="career-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="box-image">
                    <img
                      src={require("./../../images/background/attraction4.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="box-image">
                    <img
                      src={require("./../../images/background/attraction3.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="box-image">
                    <img
                      src={require("./../../images/product/marriage/marriage-8.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Career;
