import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./../Element/Ravslider";

import Header2 from "./../Layout/Header2";
// import Header from "./../Layout/Header";
import Footer2 from "./../Layout/Footer2";
import Tab from "./../Pages/Tab";
import Owl2 from "./../Element/Owl2";

var img1 = require("./../../images/overlay/pt1.jpg");

class Index2 extends Component {
  render() {
    return (
      <div>
        <div className="page-wraper font-barlow">
          <Header2 />

          <Banner />

          <div
            className="section-full content-inner bg-white"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          >
            <Tab />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="adv-box">
                    <Link to={"/shop-sidebar"}>
                      <img
                        src={require("./../../images/ads/hotel-ad4.jpg")}
                        alt=""
                        style={{ height: "421px", objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="adv-box">
                        <Link to={"/shop-sidebar"}>
                          <img
                            src={require("./../../images/ads/hotel2.jpg")}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="adv-box">
                        <Link to={"/shop-sidebar"}>
                          <img
                            src={require("./../../images/ads/hotel-ad2.jpg")}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="adv-box">
                        <Link to={"/shop-sidebar"}>
                          <img
                            src={require("./../../images/ads/hotel-ad6.jpg")}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full bg-white">
            <div className="row sp0">
              <div className="col-lg-6">
                <img
                  src={require("./../../images/ads/coffee_shop.jpeg")}
                  alt=""
                  className="img-cover"
                />
              </div>
              <div className="col-lg-6">
                <div className="menu-box">
                  <div className="section-head style-2">
                    {/* <h4 className="sub-title">Pizza Menu</h4> */}
                    <h2 className="title">Pink Pearl Hotel</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  {/* <ul className="menu-list-2">
                    <li>
                      <div className="info-price">
                        <h5 className="title">Pepperoni Pizza</h5>
                        <div className="line"></div>
                        <span className="price">14.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Apricot Chicken</h5>
                        <div className="line"></div>
                        <span className="price">07.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Pizza Veronese</h5>
                        <div className="line"></div>
                        <span className="price">14.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Summer Pizza</h5>
                        <div className="line"></div>
                        <span className="price">23.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Italian Tuna</h5>
                        <div className="line"></div>
                        <span className="price">79.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Liguria Pizza</h5>
                        <div className="line"></div>
                        <span className="price">22.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="row manu-box-reverse sp0">
              <div className="col-lg-6">
                <div className="menu-box">
                  <div className="section-head style-2">
                    {/* <h4 className="sub-title">Pizza Menu</h4> */}
                    <h2 className="title">Pink Pearl Hotel</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  {/* <ul className="menu-list-2">
                    <li>
                      <div className="info-price">
                        <h5 className="title">Pepperoni Pizza</h5>
                        <div className="line"></div>
                        <span className="price">14.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Apricot Chicken</h5>
                        <div className="line"></div>
                        <span className="price">07.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Pizza Veronese</h5>
                        <div className="line"></div>
                        <span className="price">14.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Summer Pizza</h5>
                        <div className="line"></div>
                        <span className="price">23.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Italian Tuna</h5>
                        <div className="line"></div>
                        <span className="price">79.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                    <li>
                      <div className="info-price">
                        <h5 className="title">Liguria Pizza</h5>
                        <div className="line"></div>
                        <span className="price">22.99</span>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={require("./../../images/ads/hotel-ad4.jpg")}
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
          </div>

          {/* <div className="section-full bg-white pizza-full-menu">
            <img src={require("./../../images/ads/hotel-ads8.jpg")} alt="" />
          </div> */}

          <Owl2 />

          <div className="section-full bg-primary p-tb50 newslatter-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-white">
                  <h5 className="m-b0">
                    Like deals? Be the first to know about our latest offers.
                    More fun. less money.
                  </h5>
                </div>
                <div className="col-md-6">
                  <form
                    className="dzSubscribe newslatter"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <div className="input-group-append">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn radius-xl"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer2 />
      </div>
    );
  }
}

export default Index2;
