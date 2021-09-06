import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// var img = require("./../../images/overlay/pt1.jpg");

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Owl3 extends Component {
  render() {
    return (
      <div
        className="section-full bg-white content-inner-2"
        // style={{ backgroundImage: "url(" + img + " )" }}
      >
        <div className="container">
          <div className="section-head style-2 text-center">
            <h4 className="sub-title">Testimonial</h4>
            <h2 className="title">Client Review</h2>
          </div>

          <div className="testimonial-one ">
            <Carousel
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              responsive={responsive}
              autoPlaySpeed={3000}
            >
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                    Well, the room was nice and staff was good. Especially the
                    reception manager. The food is no doubt good and location is
                    easily accessible be it from station or highway. Moreover my
                    stay was very good
                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/pic5.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">David Matin</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                    Amid these COVID situation, they ensure thorough hygiene and
                    cleanliness with all SOPs and COVID protocols well adhered.
                    Adjacent Chokha Punjab is a ++ for entertainment at night.
                    Staff is helpful and prompt.
                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/pic5.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">David Matin</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                    Amid these COVID situation, they ensure thorough hygiene and
                    cleanliness with all SOPs and COVID protocols well adhered.
                    Adjacent Chokha Punjab is a ++ for entertainment at night.
                    Staff is helpful and prompt.
                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/pic5.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">David Matin</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                    Well, the room was nice and staff was good. Especially the
                    reception manager. The food is no doubt good and location is
                    easily accessible be it from station or highway. Moreover my
                    stay was very good
                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/pic5.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">David Matin</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Owl3;
