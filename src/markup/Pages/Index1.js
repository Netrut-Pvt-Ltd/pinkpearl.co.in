import React, { Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import OurPartners from "./../Element/OurPartners";
import Slider from "./../Element/Slider";
import Accord from "./../Element/Accord";

//Images
var img1 = require("./../../images/background/bg5.jpg");
// var serblog1 = require("./../../images/our-services/pic1.jpg");
// var serblog2 = require("./../../images/our-services/pic2.jpg");
// var serblog3 = require("./../../images/our-services/pic3.jpg");
// var serblog4 = require("./../../images/our-services/pic4.jpg");
var img2 = require("./../../images/background/bg1.jpg");
var img3 = require("./../../images/background/bg5.jpg");
// var img4 = require("./../../images/background/bg4.jpg");
var attraction1 = require("./../../images/background/attraction1.jpg");
var attraction2 = require("./../../images/background/attraction2.jpg");
var attraction3 = require("./../../images/background/attraction3.jpg");
var attraction4 = require("./../../images/background/attraction4.jpg");
var pinkImg = require("./../../images/main-slider/pink-slider1.jpg");
// var about1 = require("./../../images/about/about1.jpg");

const blogNews = [
  {
    image: require("./../../images/background/attraction4.jpg"),
    title: "Pink Pearl Water Park",
  },
  {
    image: require("./../../images/background/attraction4.jpg"),
    title: "Pink Pearl Water Sports",
  },
  {
    image: require("./../../images/background/attraction3.jpg"),
    title: "Pink Pearl Hotel",
  },
];

class Index1 extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="content-block">
            <Slider />
            <div
              className="section-full content-inner-3"
              style={{
                backgroundImage: "url(" + img1 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row service-area1">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{
                        backgroundImage: "url(" + attraction1 + ")",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Attractions</h2>
                        {/* <p>Lorem Ipsum is simply</p> */}
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{
                        backgroundImage: "url(" + attraction2 + ")",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Chokha Punjab</h2>
                        {/* <p>Lorem Ipsum is simply</p> */}
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{
                        backgroundImage: "url(" + attraction3 + ")",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Hotel</h2>
                        {/* <p>Lorem Ipsum is simply </p> */}
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{
                        backgroundImage: "url(" + attraction4 + ")",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">
                          Thematic Areas
                        </h2>
                        {/* <p>Lorem Ipsum is simply </p> */}
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head mb-0 text-center">
                      <div className="icon-bx icon-bx-xl">
                        <img
                          src={require("./../../images/pink-logo.png")}
                          alt=""
                        />
                      </div>
                      <h3 className="text-primary">
                        It’s a water park and you’re invited
                      </h3>
                      <p className="main-text">
                        Rajasthan’s biggest, best, most exhilarating
                        <strong> water park</strong> and so much more.
                      </p>
                      {/* <p>
                        Exclusive deals on Cakes, delivered straight to your
                        inbox <Link to={""}>Join Now</Link>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom"
              style={{
                backgroundImage: `linear-gradient(
					90deg
					,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url( ${pinkImg} )`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <h2 className="text-white">What Do We Offer For You?</h2>
                      <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 m-b30">
                    <img
                      src={require("./../../images/about/about1.jpg")}
                      className="img-cover radius-sm"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="row p-l30">
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon2.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Adventure Park</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon3.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Army Obstacle</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon4.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Rides</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon5.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Water Sports</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon5.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Lockers</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 m-b30">
                        <div className="icon-bx-wraper text-white service-box2">
                          <div className="icon-bx">
                            <Link to={""} className="icon-cell">
                              <img
                                src={require("./../../images/icons/service-icon/icon1.png")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Yummy Food</h5>
                            {/* <p>Lorem Ipsum is dummy</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-full content-inner bg-gray"
              style={{
                backgroundImage: "url(" + img2 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row faq-area1">
                  <div className="col-lg-6 m-b30">
                    <div className="m-r20">
                      <div className="section-head text-left">
                        <h2>Where to find us</h2>
                        <p className="text-bold">
                          10th Mile, Ajmer Express Highway, Jaipur, Rajasthan
                          302026
                        </p>
                        <div className="dlab-separator style1 bg-primary"></div>
                      </div>
                      <div className="clearfix">
                        <p>
                          Pink Pearl Hotel & Fun City is located 16 kms. from
                          the city center on Jaipur Ajmer Expressway in the
                          proximity of multi-commodity Special Economic Zone
                          (SEZ) from Mahindra & Mahindra. Pink Pearl provides
                          comfortable, elegant rooms for guest accommodation and
                          amusement games and activities to make their stay
                          memorable and full of fun.
                        </p>
                        <p className="text">
                          First and foremost I am a chef, whether behind the
                          stove at one of my Northern California restaurants or
                          for the past 15 years in front of the Lorem Ipsum is
                          simply <strong>Bakery</strong> dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley.
                        </p>
                        <Link
                          to={"/faq"}
                          className="btn btn-md btnhover shadow m-t30"
                        >
                          <i className="fa fa-angle-right m-r10"></i>Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 m-b30">
                    <Accord />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-full bg-white">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/ourwork1.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Water Park</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/ourwork2.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Adventure Park</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/ourwork3.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Water Sports</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white m-md-b0 m-sm-b0">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/ourwork3.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Rides</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-full bg-white"
              style={{
                backgroundImage: "url(" + img3 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container content-inner">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <div className="icon-bx icon-bx-xl">
                        <img
                          src={require("./../../images/pink-logo.png")}
                          alt=""
                        />
                      </div>
                      <h3>We Are Professional at Our Skills</h3>
                      <p>More than 2000+ customers trusted us</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-center">
                      <div className="counter-num text-primary">
                        <span className="counter">
                          <CountUp end={53} />
                        </span>
                        <small>+</small>
                      </div>
                      <span className="counter-text">Years of Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-center">
                      <div className="counter-num text-primary">
                        <span className="counter">
                          <CountUp end={102} />
                        </span>
                      </div>
                      <span className="counter-text">Awards Wins</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-center">
                      <div className="counter-num text-primary">
                        <span className="counter">
                          <CountUp end={36} />
                        </span>
                        <small>k</small>
                      </div>
                      <span className="counter-text">Happy Clients</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-center">
                      <div className="counter-num text-primary">
                        <span className="counter">
                          <CountUp end={99} />
                        </span>
                      </div>
                      <span className="counter-text">Perfect Products</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row m-lr0 about-area1">
                  <div className="col-lg-6 p-lr0">
                    <img
                      className="img-cover"
                      src={require("./../../images/about/about1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
                    <div className="about-bx">
                      <div className="section-head text-center text-white">
                        <h4 className="text-white">Timings</h4>
                        {/* <p>Wedding Cake Sale !</p> */}
                        {/* <div className="icon-bx">
                          <img
                            // src={require("./../../images/icons/service-icon/icon2.png")}
                            alt=""
                          />
                        </div> */}
                      </div>
                      <p>
                        <strong> Timing: 10 AM to 7 PM </strong>
                      </p>
                      <p>
                        Water Park Rates (April): Monday to Friday - Adults Rs
                        400 | Kids Rs 300 Saturday and Sunday: Adults Rs 500 |
                        Kids Rs 350 (Kids Height below 4.5ft)
                      </p>
                      <Link
                        to={"about-1"}
                        className="btn-secondry white btnhover btn-md"
                      >
                        <i className="fa fa-cart"></i>GET NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container">
                <div className="row client-area1 p-t80">
                  <OurPartners />
                </div>
              </div> */}
              <div className="container content-inner">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <div className="icon-bx icon-bx-xl">
                        <img
                          src={require("./../../images/pink-logo.png")}
                          alt=""
                        />
                      </div>
                      <h3>From The Blog</h3>
                      <p>Latest news and updates</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {blogNews.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="blog-post blog-grid blog-rounded">
                        <div className="dlab-post-media dlab-img-effect">
                          <Link to={"/blog-single-sidebar"}>
                            <img src={item.image} alt="" />
                          </Link>
                        </div>
                        <div className="dlab-info p-a25">
                          <div className="dlab-post-title">
                            <h4 className="post-title">
                              <Link to={"/blog-single-sidebar"}>
                                {item.title}
                              </Link>
                            </h4>
                          </div>
                          {/* <div className="dlab-post-meta">
                            <ul>
                              <li className="post-folder">
                                <i className="fa fa-folder-open-o"></i>
                                <Link to={""}>Cake</Link>,
                                <Link to={""}> Biscuits</Link>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Index1;
