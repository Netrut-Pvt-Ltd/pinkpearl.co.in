import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Banner from "./../Element/Index3Slider";

import Header2 from "./../Layout/Header2";
// import Header from "./../Layout/Header";
import Footer2 from "./../Layout/Footer2";
import GardenGallery from "../Element/GardenGallery";
import Owl2 from "../Element/Owl2";

// import Tab from "./../Pages/Tab";
// import Owl2 from "./../Element/Owl2";

// var img1 = require("./../../images/overlay/pt1.jpg");

class Index3 extends Component {
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
          {/* <Tab /> */}

          <div className="container">
            <div className="marriage-head">
              <h2 style={{ color: "#5fcac7" }}>
                Royal wedding destination in Jaipur- Pink Pearl
              </h2>
              <p
                style={{
                  color: "rgb(127 118 118)",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Your special day calls for a celebration at a Special location.
                So, here’s a glance at some of the reasons why Pink Pearl makes
                for a superb option to host wedding functions
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="marriage-image m-b10">
                  <img
                    src={require("./../../images/product/marriage/marriage-1.jpg")}
                    alt=""
                    // style={{ height: "421px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="marriage-list m-b10">
                  <ul className="list-unstyled ">
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Lush Green Garden Area is 65,376 sq. ft.
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Capacity approx 3000 pax
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Situated in Prime location – Ajmer-Jaipur Highway
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Spacious Parking Area
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        On-site facilities, appeasement, and the high-class
                        amenities
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Royal Wedding Destination
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ color: "rgb(127 118 118)" }}>
                        <i
                          className="fa fa-arrow-right"
                          style={{ color: "#5fcac7", marginRight: "8px" }}
                          aria-hidden="true"
                        ></i>
                        Luxurious Stay – Pink Pearl Hotel
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="about-garden">
              <h5 style={{ color: "#5fcac7" }}>
                Best wedding destination in Jaipur for a memorable day
              </h5>
              <p style={{ color: "rgb(127 118 118)" }}>
                Owing to its perfect ambiance and old world charm, Rajasthan is
                well known as a wedding paradise for it is the ‘land filled with
                vibrant colors’ and the ‘realm of kings and queens’.The capital
                city of Rajasthan, Jaipur as well is indeed a heaven for royal,
                big fat Indian weddings. The Pink City preserves in its demeanor
                the royal heritage and rich culture through its forts and
                elaborate palaces. For the couples looking for stunning
                locations amidst luxury and grandeur, Jaipur has treasured in
                its repertoire a number of 5 star wedding venues which are best
                for planning a destination wedding in Jaipur.
              </p>
              <div className="marriage-boxes">
                <div className="row">
                  <div className="col-lg-6 col-md-6 m-b30">
                    <img
                      src={require("./../../images/product/marriage/marriage-3.jpg")}
                      alt=""
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        height: "300px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 m-b30">
                    <img
                      src={require("./../../images/product/marriage/marriage-4.jpg")}
                      alt=""
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        height: "300px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <p style={{ color: "rgb(127 118 118)" }}>
                Pink Pearl Marriage garden, the sister concern of Chokhi Dhani
                Group, is a name renowned as one of the most Beautiful wedding
                locations in Jaipur, reminiscent to the regal Rajasthan which is
                laden with a rich history and culture. Pink pearl is a known
                name in the hospitality sector and hence is not new and amateur
                to wedding celebrations. The on-site facilities, appeasement,
                and the high-class amenities are bound to leave every visitor
                mesmerized. Here, a lot of attention is given to the details and
                the services are a melange of quality with world-class
                facilities. Pink Pearl, as a Royal wedding destination in Jaipur
                has everything to make you feel awe-struck with the wedding
                venue services in Jaipur right from the location, to decor, to
                catering, to stay and what not !
              </p>
            </div>
          </div>

          <div className="gallery-garden">
            <div className="container">
              <h2 className="text-center" style={{ color: "#5fcac7" }}>
                Gallery
              </h2>
              <p style={{ color: "rgb(127 118 118)" }} className="text-center">
                For the people planning a wedding in the near future and looking
                forward to a hassle-free experience, choose us. We believe in
                assisting our patrons with quick and the best services. Make
                your wedding ceremony a royal affair with Pink Pearl Marriage
                garden and Hotel.Pink Pearl has been a spectator to grand
                weddings with its majestic structure. Add to the happiness of
                your big day with one of the most exotic wedding destinations in
                Jaipur.
              </p>
            </div>

            <GardenGallery />
          </div>

          <Owl2 />

          <div className="contact-info">
            <div className="container">
              <h2 className="text-center" style={{ color: "#5fcac7" }}>
                REACH US FOR YOUR WEDDING ENQUIRY
              </h2>
              <div className="row">
                {/* <div class="contact-info text-center"> */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                    <i
                      className="card-icon fa fa-envelope-o"
                      aria-hidden="true"
                    ></i>
                    <p>+91- 9314512035</p>
                    <p>mktg_jpr@pinkpearl.co.in</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                    <i className="card-icon fa fa-phone" aria-hidden="true"></i>
                    <p>+91- 8875691555</p>

                    <p>operationsmgr@pinkpearl.co.in</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                    <i
                      className="card-icon fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                    <p>Location</p>
                    <p>Jaipur, India</p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default Index3;
