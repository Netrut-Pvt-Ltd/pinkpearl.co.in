import React, { Component } from "react";

import { Link } from "react-router-dom";
import GoogleMaps from "simple-react-google-maps";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";

var bgimg1 = require("./../../images/main-slider/pink-slider1.jpg");
var bgimg2 = require("./../../images/background/bg5.jpg");

class Contact extends Component {
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
                <h1 className="text-white">Contact</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"./"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div
              className="section-full content-inner-2 contact-form bg-white"
              style={{
                backgroundImage: "url(" + bgimg2 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
                    <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
                      <h3 className="m-b5">Quick Contact</h3>
                      <p>
                        If you have any questions simply use the following
                        contact details.
                      </p>
                      <ul className="no-margin">
                        <li className="icon-bx-wraper left m-b30">
                          <div className="icon-bx-xs border-1 text-primary">
                            {" "}
                            <Link to={""} className="icon-cell">
                              <i className="ti-location-pin"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              Address:
                            </h6>
                            <p>
                              10th Mile, Ajmer Express Highway, Jaipur,
                              Rajasthan 30
                            </p>
                          </div>
                        </li>
                        <li className="icon-bx-wraper left  m-b30">
                          <div className="icon-bx-xs border-1 text-primary">
                            {" "}
                            <Link to={""} className="icon-cell">
                              <i className="ti-email"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              Email:
                            </h6>
                            <p>
                              <a href="#"> front_office@pinkpearl.co.in </a>|
                              {/* <a href="#"> operationsmgr@pinkpearl.co.in </a> */}
                            </p>
                            <p>
                              <a href="#">
                                {/* Email (Sales): mktg_jpr@pinkpearl.co.in */}
                              </a>
                            </p>
                          </div>
                        </li>
                        <li className="icon-bx-wraper left">
                          <div className="icon-bx-xs border-1 text-primary">
                            <Link to={""} className="icon-cell">
                              <i className="ti-mobile"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              PHONE
                            </h6>
                            <p>
                              (Front Office Hotel): +91-7410994999
                              |+91-7410885888
                            </p>
                            {/* <p>(Water Park): +91-9314823132 | +91-9587433803</p> */}
                            {/* <p>Corporate Sales Office: +91-9314512035</p> */}
                          </div>
                        </li>
                      </ul>
                      <div className="m-t20">
                        <ul className="dlab-social-icon dlab-social-icon-lg">
                          <li>
                            <Link
                              to={""}
                              className="fa fa-facebook bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-twitter bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-linkedin bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-pinterest-p bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-google-plus bg-primary "
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 m-md-b30 m-lg-b30">
                    <div className="p-a30 bg-gray clearfix radius-sm contact-form-box">
                      <h3 className="m-b20">Send Message Us</h3>
                      <div className="dzFormMsg"></div>
                      <form
                        method="post"
                        className="dzForm"
                        action="script/contact.php"
                      >
                        <input type="hidden" value="Contact" name="dzToDo" />
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div className="input-group">
                                <input
                                  name="dzName"
                                  type="text"
                                  required
                                  className="form-control"
                                  placeholder="Your Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div className="input-group">
                                <input
                                  name="dzEmail"
                                  type="email"
                                  className="form-control"
                                  required
                                  placeholder="Your Email Id"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div className="input-group">
                                <textarea
                                  name="dzMessage"
                                  rows="4"
                                  className="form-control"
                                  required
                                  placeholder="Your Message..."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group recaptcha-bx">
                              <div className="input-group">
                                <div
                                  className="g-recaptcha"
                                  data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                  data-callback="verifyRecaptchaCallback"
                                  data-expired-callback="expiredRecaptchaCallback"
                                ></div>
                                <input
                                  className="form-control d-none"
                                  style={{ display: "none" }}
                                  data-recaptcha="true"
                                  required
                                  data-error="Please complete the Captcha"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              name="submit"
                              type="submit"
                              value="Submit"
                              className="btn btnhover"
                            >
                              {" "}
                              <span>Submit</span>{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 d-flex m-t30">
                  {/* <GoogleMaps
                    apiKey={"AIzaSyBbHk3eFodSk_DSGzv8dd_dIJpZvVDyg4s "}
                    style={{ height: "500px", width: "100%" }}
                    zoom={12}
                    center={{ lat: 26.860677124696, lng: 75.66866838341656 }}
                    markers={{ lat: 26.860677124696, lng: 75.66866838341656 }} //optional
                  /> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.35073018695!2d75.66644751436459!3d26.860595768799605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b080880d75d%3A0xd9071e47110005da!2sPink%20Pearl%20Resort%20and%20Fun%20City!5e0!3m2!1sen!2sin!4v1630752681362!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
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

export default Contact;
