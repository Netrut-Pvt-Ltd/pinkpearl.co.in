import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import OurPartners from "./../Element/OurPartners";
import CountUp from "react-countup";

var bgimg1 = require("./../../images/main-slider/pink-slider1.jpg");
var bgimg2 = require("./../../images/product/chokha-punjab/chokha-dine2.jpg");
var img2 = require("./../../images/background/bg1.jpg");
var img3 = require("./../../images/background/bg5.jpg");
var img4 = require("./../../images/background/bg3.jpg");

const teamInfo = [
  {
    image: require("./../../images/our-team/member1.jpg"),
    name: "Nashid Martines",
    post: "Founder",
  },
  {
    image: require("./../../images/our-team/member2.jpg"),
    name: "Konne Backfiled",
    post: "Sous Chef",
  },
  {
    image: require("./../../images/our-team/member3.jpg"),
    name: "Valentino Morose",
    post: "Ceo & Founder",
  },
  {
    image: require("./../../images/our-team/member4.jpg"),
    name: "Hackson Willingham",
    post: "Master Chef",
  },
];

class About extends Component {
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
                <h1 className="text-white">About Us</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div
              className="section-full bg-white content-inner"
              style={{
                backgroundImage: "url(" + img3 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      {/* <div className="icon-bx icon-bx-xl">
                        <img src={require("./../../images/cake1.jpg")} alt="" />
                      </div> */}
                      <h3>About Us</h3>
                      <p>
                        Chokhi Dhani Group is synonymous with Rajasthani village
                        themed hospitality since 1990. Since December of 1994,
                        the 5 Star Chokhi Dhani Resort & Hotel in Jaipur has
                        been serving international and local travelers. Under
                        guidance of Chairman Mr. Gul Vaswani and Managing
                        Director Mr. Subhash Vaswani Chokhi Dhani Group has
                        emerged as a unique hospitality chain due to its
                        commitment to provide guests with unique experience of
                        Rajasthani culture. The pride of Rajasthan and India
                        Chokhi Dhani Group can easily boast itself as a great
                        promoter and preserver of traditional heritage
                        hospitality of Rajasthani culture.
                      </p>
                      {/* <p>
                        Chokhi Dhani is a five star ethnic village resort with
                        an exquisite Rajasthani touch that makes it unique and
                        more enjoyable. Chokhi Dhani is a perfect place for a
                        weekend, you can experience the whole Rajasthan here.
                        Staying in the ethnic huts, eating delicious food in
                        traditional style, enjoying the folk music and dance
                        performance.
                      </p>
                      <p>
                        Chokhi Dhani Group is synonymous with Rajasthani village
                        themed hospitality since 1990. Since December of 1994,
                        the 5 Star Chokhi Dhani Resort & Hotel in Jaipur has
                        been serving international and local travelers. Under
                        guidance of Chairman Mr. Gul Vaswani and Managing
                        Director Mr. Subhash Vaswani Chokhi Dhani Group has
                        emerged as a unique hospitality chain due to its
                        commitment to provide guests with unique experience of
                        Rajasthani culture. The pride of Rajasthan and India
                        Chokhi Dhani Group can easily boast itself as a great
                        promoter and preserver of traditional heritage
                        hospitality of Rajasthani culture. Chokhi Dhani is a
                        five star ethnic village resort with an exquisite
                        Rajasthani touch that makes it unique and more
                        enjoyable. Chokhi Dhani is a perfect place for a
                        weekend, you can experience the whole Rajasthan here.
                        Staying in the ethnic huts, eating delicious food in
                        traditional style, enjoying the folk music and dance
                        performance. Pink Pearl Hotel & Fun City is located 16
                        kms. from the city center on Jaipur Ajmer Expressway in
                        the proximity of multi-commodity Special Economic Zone
                        (SEZ) from Mahindra & Mahindra. Pink Pearl provides
                        comfortable, elegant rooms for guest accommodation and
                        amusement games and activities to make their stay
                        memorable and full of fun. It is an ideal spot for
                        family outings, picnics, for corporate meets, birthday
                        bashes, wedding receptions, functions & for quiet family
                        get-togethers.
                      </p> */}
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6  m-b30">
                          <div className="about-cp-image">
                            <img
                              src={require("./../../images/product/chokha-punjab/chokha-dine1.jpg")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6  m-b30">
                          <div className="about-cp-text">
                            <p>
                              Chokhi Dhani is a five star ethnic village resort
                              with an exquisite Rajasthani touch that makes it
                              unique and more enjoyable. Chokhi Dhani is a
                              perfect place for a weekend, you can experience
                              the whole Rajasthan here. Staying in the ethnic
                              huts, eating delicious food in traditional style,
                              enjoying the folk music and dance performance.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6  m-b30">
                          <div className="about-cp-text">
                            <p>
                              Pink Pearl Hotel & Fun City is located 16 kms.
                              from the city center on Jaipur Ajmer Expressway in
                              the proximity of multi-commodity Special Economic
                              Zone (SEZ) from Mahindra & Mahindra. Pink Pearl
                              provides comfortable, elegant rooms for guest
                              accommodation and amusement games and activities
                              to make their stay memorable and full of fun. It
                              is an ideal spot for family outings, picnics, for
                              corporate meets, birthday bashes, wedding
                              receptions, functions & for quiet family
                              get-togethers.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6  m-b30">
                          <div className="about-cp-image">
                            <img
                              src={require("./../../images/product/pink-pearl/pink-pearl.jpg")}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cp-content">
                  <div
                    className="content-inner "
                    style={{
                      backgroundImage: `linear-gradient(
					90deg
					,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url( ${bgimg2}  )`,
                      backgroundSize: "cover",
                      backgroundPosition: "5% 28%",
                      width: "100%",
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-head text-center text-white">
                            <p>
                              Chokhi Dhani Group is synonymous with Rajasthani
                              village themed hospitality since 1990. Since
                              December of 1994, the 5 Star Chokhi Dhani Resort &
                              Hotel in Jaipur has been serving international and
                              local travelers. Under guidance of Chairman Mr.
                              Gul Vaswani and Managing Director Mr. Subhash
                              Vaswani Chokhi Dhani Group has emerged as a unique
                              hospitality chain due to its commitment to provide
                              guests with unique experience of Rajasthani
                              culture. The pride of Rajasthan and India Chokhi
                              Dhani Group can easily boast itself as a great
                              promoter and preserver of traditional heritage
                              hospitality of Rajasthani culture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row sp30">
                  <div className="col-lg-4 col-md-4 m-b30">
                    <div className="about-thumb">
                      <img
                        src={require("./../../images/background/attraction4.jpg")}
                        alt=""
                        style={{ height: "227px", objectFit: "cover" }}
                      />
                      <h3>Water Park</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 m-b30">
                    <div className="about-thumb">
                      <img
                        src={require("./../../images/background/attraction3.jpg")}
                        alt=""
                        style={{ height: "227px", objectFit: "cover" }}
                      />
                      <h3>Pink Pearl Hotel</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 m-b30">
                    <div className="about-thumb">
                      <img
                        src={require("./../../images/product/marriage/marriage-8.jpg")}
                        alt=""
                        style={{
                          height: "227px",
                          objectFit: "cover",
                        }}
                      />
                      <h3>Chokha Punjab</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-full content-inner bg-line-top bg-line-bottom"
              style={{
                backgroundImage: `linear-gradient(
					90deg
					,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url( ${bgimg1}  )`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center text-white">
                      <h3 className="text-white">
                        We Are Professional at Our Skills
                      </h3>
                      <p>More than 2000+ customers trusted us</p>
                    </div>
                  </div>
                </div>
                <div className="row max-w900 m-auto">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-white text-center">
                      <div className="counter-num">
                        <span className="counter">
                          <CountUp end={53} />
                        </span>
                        <small>+</small>
                      </div>
                      <span className="counter-text">Years of Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-white text-center">
                      <div className="counter-num">
                        <span className="counter">
                          <CountUp end={102} />
                        </span>
                      </div>
                      <span className="counter-text">Awards Wins</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-white text-center">
                      <div className="counter-num">
                        <span className="counter">
                          <CountUp end={36} />
                        </span>
                        <small>k</small>
                      </div>
                      <span className="counter-text">Happy Clients</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-1 text-white text-center">
                      <div className="counter-num">
                        <span className="counter">
                          <CountUp end={99} />
                        </span>
                      </div>
                      <span className="counter-text">Perfect Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-full content-inner-1 bg-white"
              style={{ backgroundImage: "url(" + img2 + ")" }}
            >
              {/* <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <h3>Our Expert Chefs</h3>
                      <p>Meet our professional team meambers</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {teamInfo.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-team1" key={index}>
                        <div className="thumb">
                          <img src={item.image} alt="" />
                          <ul className="social-link">
                            <li>
                              <Link to={""}>
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to={""}>
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="team-info text-center">
                          <h4 className="name">{item.name}</h4>
                          <p className="position">{item.post}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* <div className="p-tb50">
                <div className="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="section-head text-center">
                        <h3>Our PARTNERS</h3>
                        <p>famous companies trusted us, why you are not</p>
                      </div>
                    </div>
                  </div>
                </div>
                <OurPartners />
              </div> */}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default About;
