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
                  I have stayed with Pink Pearl Hotel on my visit to Jaipur and I absolutely loved the hospitality. My room was super clean and sanitised and the staff was available as and when required. They were all so welcoming and the services are superb.
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
                  <strong className="testimonial-name">Pranav Das</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                  My family and I stayed at Pink Pearl Hotel during a family wedding. All the arrangements were top-notch and we were delighted to receive such amazing service from the staff. I absolutely enjoyed the stay as well as a visit to Chokha Punjab. It's amazing!
                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/member1.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">Pankaj Singh</strong>{" "}
                  {/* <span className="testimonial-position">Student</span>{" "} */}
                </div>
              </div>
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>
                  We had some guests over here in Jaipur and we booked Pink Pearl Hotel for their stay. They were very impressed with the hotel and we're happy with the treatment they received and the awesome property. I am glad I recommended Pink Pearl to them and they appreciated my decision. 

                  </p>
                </div>
                <div className="testimonial-pic radius">
                  <img
                    src={require("./../../images/testimonials/pic4.jpg")}
                    style={{ width: "100", height: "100" }}
                    alt=""
                  />
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">Suyash Sharma</strong>{" "}
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
