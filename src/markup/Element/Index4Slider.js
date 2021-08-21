import React, { Component } from "react";
import { Link } from "react-router-dom";

import { bounceInDown, bounceInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounceInDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInDown, "bounceInDown"),
  },
  bounceInUp: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInUp, "bounceInUp"),
  },
};

let bnr2 = require("./../../images/main-slider/pink-slider2.jpg");

export class Index4Slider extends Component {
  render() {
    return (
      <div className="banner">
        <div
          className="section-full content-inner bnr-bg"
          style={{
            backgroundImage: `linear-gradient(
                    90deg
                    ,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url( ${bnr2} )`,
            // backgroundSize: "100%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center m-auto">
                <StyleRoot>
                  <div
                    className="content index4-slider"
                    style={styles.bounceInDown}
                  >
                    <h1 className="title pb-5">Chokha Punjab</h1>

                    {/* <div className="bnr-logo">
                        <img
                        src={require("./../../images/main-slider/slide5.png")}
                        alt="offer"
                        />
                    </div> */}

                    <Link
                      to={""}
                      className="btn white"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </Link>
                  </div>
                </StyleRoot>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index4Slider;
