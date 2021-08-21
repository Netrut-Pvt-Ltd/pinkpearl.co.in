import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./../Element/Index4Slider";

import Header2 from "./../Layout/Header2";
// import Header from "./../Layout/Header";
import Footer2 from "./../Layout/Footer2";

// import Tab from "./../Pages/Tab";
import Owl2 from "./../Element/Owl2";

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
          <div className="cp-punjab">
            <div className="container">
              <div className="marriage-head">
                <h2 style={{ color: "#5fcac7" }}>CHOKHA PUNJAB</h2>
                <p
                  style={{
                    color: "rgb(127 118 118)",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  At the beautifully designed, authentic place to enjoy the
                  delicious and mouth watering Punjabi food with the charismatic
                  'Bhangra' performances and Live cultural programs. Open for
                  lunch and dinner, Punjabi Indian Tandoori Restaurant takes
                  fine Indian dining to a whole new level. Come in and try our
                  traditional dishes today. Or if you're thinking of staying in
                  or having friends over, our Take Away service guarantees to
                  satisfy. We specialise in all types of Indian cooking from
                  Tandoori Curry dishes to Sweets, our extensive menu includes
                  many vegetarian dishes, breads, desserts and traditional
                  Indian sweets and beverages.
                </p>
              </div>

              <div className="cp-venues">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <div className="cp-image">
                      <img
                        src={require("./../../images/product/chokha-punjab/chokha-dine1.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="cp-text">
                      <h3 style={{ color: "#5fcac7" }}>Dining</h3>
                      <p
                        style={{
                          color: "rgb(127 118 118)",
                          textAlign: "justify",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <a href="#" style={{ color: "#5fcac7" }}>
                        Book Now{" "}
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-4 col-md-4">
                    <div className="cp-text">
                      <h3 style={{ color: "#5fcac7" }}>Entertainment</h3>
                      <p
                        style={{
                          color: "rgb(127 118 118)",
                          textAlign: "justify",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <a href="#" style={{ color: "#5fcac7" }}>
                        Book Now{" "}
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 ">
                    <div className="cp-image">
                      <img
                        src={require("./../../images/product/chokha-punjab/entertainment1.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cp-menu">
              <div className="container ">
                <h2
                  style={{ color: "#5fcac7", textAlign: "center" }}
                  className="pb-5"
                >
                  Our Menu
                </h2>
                <div className="row ">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food1.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Veg Starters
                          </h3>

                          <p>it's better here</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food2.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            WELCOME DRINKS/SOUP
                          </h3>

                          <p>Enjoy. Coke side of life. Create your own break</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food3.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            GREEN SALAD
                          </h3>

                          <p>
                            Eat Right and Light. You'll only think about salad
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food4.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            CHUTNEY, PAPAD, AACHAR
                          </h3>

                          <p>
                            Sour is the new favorite Pickle picked with love
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food5.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            PANEER VEG
                          </h3>

                          <p>Diet food is not meal, its medicine</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food6.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Seasonal Veg
                          </h3>

                          <p>
                            Fruits and vegetables are very essential for a
                            healthy lifestyle and a balanced die
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food7.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Special Veg
                          </h3>

                          <p>For a healthier you.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food8.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Dal
                          </h3>

                          <p>There are so many benefits of having dal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food9.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Rice / Pulao
                          </h3>

                          <p>
                            Rice that makes your meal complete. Rice that make
                            you hungry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food10.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Raita
                          </h3>

                          <p>
                            Raita is one of the classic dishes in the Indian
                            cuisine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food11.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            dessert
                          </h3>

                          <p>Give yourself a sweet treat after a heavy meal.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="menu-image">
                          <img
                            src={require("./../../images/product/chokha-punjab/cp-food12.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <div
                          className="menu-text"
                          style={{ overflow: "hidden" }}
                        >
                          <h3
                            style={{
                              textTransform: "uppercase",
                            }}
                          >
                            Ice-Cream
                          </h3>

                          <p>Ice-Cream</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cp-price">
              <div className="container">
                <div className="row m-lr0 about-area1">
                  <div className="col-lg-6 p-lr0">
                    <img
                      className="img-cover"
                      src={require("./../../images/product/chokha-punjab/chokha-dine2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
                    <div className="about-bx">
                      <div className="section-head text-center text-white">
                        <h4 className="text-white">Entry Charges</h4>
                        {/* <p>Wedding Cake Sale !</p> */}
                        {/* <div className="icon-bx">
                          <img
                            // src={require("./../../images/icons/service-icon/icon2.png")}
                            alt=""
                          />
                        </div> */}
                      </div>
                      <p>
                        <strong> Adult - ₹ 349 </strong>
                      </p>
                      <p>
                        <strong> Child - ₹ 249 </strong>
                      </p>
                      <p>
                        CHOKHA PUNJAB - We would like to introduce our one of
                        its kind restaurant CHOKHA PUNJAB -The Ethnic Punjabi
                        Village Fair & Dining (Pure Veg.) is a beautifully
                        designed, authentic place to enjoy the delicious &
                        mouth-watering Punjabi food with the charismatic Bhangra
                        performances & live cultural programs.{" "}
                      </p>
                      <Link
                        to={"/contact-1"}
                        className="btn-secondry white btnhover btn-md"
                      >
                        <i className="fa fa-cart"></i>GET NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Owl2 />
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default Index4;
