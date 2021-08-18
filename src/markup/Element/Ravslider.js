import React, { Component } from "react";
import { Link } from "react-router-dom";

var bnr = require("./../../images/main-slider/slide10.jpg");
let bnr2 = require("./../../images/main-slider/hotel-banner.jpg");

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div
          className="section-full content-inner bnr-bg"
          style={{
            backgroundImage: `linear-gradient(
				90deg
				,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url( ${bnr2} )`,
            backgroundSize: "100%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center m-auto">
                <div className="content">
                  <h5 className="title">Pink Pearl Hotel</h5>
                  {/* 
                  <div className="bnr-logo">
                    <img
                      src={require("./../../images/main-slider/slide5.png")}
                      alt="offer"
                    />
                  </div> */}

                  <p className="info">
                    Aliquam vulputate, tortor nec commodo ultricies,vitae
                    viverra urna nulla sed turpis. Nullam lacinia faucibus
                    risus, a euismod.
                  </p>

                  <Link
                    to={""}
                    className="btn white"
                    data-target="#exampleModal"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
