import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
// import slider1 from "./../../images/main-slider/slide1.jpg";
// import slider2 from "./../../images/main-slider/slide2.jpg";
import pinkslider1 from "./../../images/main-slider/pink-slider1.jpg";
import pinkslider2 from "./../../images/main-slider/pink-slider2.jpg";
import pinkslider3 from "./../../images/main-slider/pink-slider3.jpg";

class Slider extends Component {
  render() {
    return (
      <div className="main-slider">
        <Carousel indicators={false}>
          <Carousel.Item>
            <div
              className="slide"
              // style={{
              //   backgroundImage: `linear-gradient(
              //     90deg
              //     ,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url( ${pinkslider1} )`,
              //   // filter: "brightness(77%)",
              // }}
            >
              <video autoPlay muted loop style={{ width: "100vw" }}>
                <source
                  src={require("./../../images/main-slider/slider_video.mp4")}
                  type="video/mp4"
                />
              </video>
              {/* <img className="d-block w-100 slider" src={require('./../../images/main-slider/slide1.jpg')}	alt="Second slide"	/> */}
              <div className="content">
                <span>Water Park</span>
                <h2 className="title">Welcome To Pink Pearl</h2>
                <h4 className="sub-title">The Best Water Park In Jaipur</h4>
                <Link to={"/contact-1"} className="btn btnhover">
                  About Us
                </Link>
                {/* <Link
                  to={""}
                  className="btn white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Subscribe Now
                </Link> */}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
