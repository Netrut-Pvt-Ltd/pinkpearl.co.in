import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

const Popupss = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="section-full bg-white pizza-full-menu">
      <div tabs>
        <div className="bg-primary pizza-items">
          <div className="container">
            <ul className="nav nav-tabs pizza-items filters">
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "1" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <i className="flaticon-pizza-slice"></i>
                  <span>Accomodation</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "2" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <i className="flaticon-burger"></i>
                  <span>Conference Hall</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "3" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <i className="flaticon-french-fries"></i>
                  <span>Egyptian Restaurant</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "4" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  <i className="flaticon-cola"></i>
                  <span>Gymnasium</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "5" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  <i className="flaticon-hot-dog"></i>
                  <span>Gothic Restaurant</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "6" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  <i className="flaticon-cookies"></i>
                  <span>Cinnamon Restaurant</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === "7" },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle("7");
                  }}
                >
                  <i className="flaticon-sandwich"></i>
                  <span>Discotheque Cum Bar</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-inner">
        <div className="container-fluid">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="row tab-pane fade show active">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <img
                        src={require("./../../images/product/hotel/accomodation.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Hotel Room</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <img
                        src={require("./../../images/product/hotel/accomodation1.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Hotel Room</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <img
                        src={require("./../../images/product/hotel/accomodation.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Hotel Room</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <img
                        src={require("./../../images/product/hotel/accomodation1.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Hotel Room</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <img
                        src={require("./../../images/product/hotel/accomodation.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Hotel Room</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />{" "}
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Conference Hall
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Conference Hall
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Conference Hall
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Conference Hall
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Conference Hall
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/egyptian-restaurant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Egyptian Restraurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/egyptian-restaurant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Egyptian Restraurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/egyptian-restaurant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Egyptian Restraurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/egyptian-restaurant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Egyptian Restraurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/egyptian-restaurant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Egyptian Restraurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Gym</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Gym</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Gym</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Gym</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Gym</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="5">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Gothic Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Gothic Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Gothic Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Gothic Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Gothic Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tabId="6">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/cinnamon-res1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Cinnamon Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/cinnamon-res2.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Cinnamon Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/cinnamon-res1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Cinnamon Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/cinnamon-res1.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Cinnamon Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/cinnamon-res2.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>
                          Cinnamon Restaurant
                        </Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tabId="7">
              <div className="row ">
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Disco</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Disco</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Disco</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Disco</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dz-col col m-b30">
                  <div className="item-box shop-item style2">
                    <div className="item-img">
                      <Link>
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={"/shop-product-details"}>Disco</Link>
                      </h4>
                      <h5 className="price text-primary">
                        <del>45</del>
                        <span>$40</span>
                      </h5>
                      <div className="cart-btn">
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover radius-xl"
                        >
                          <i className="ti-shopping-cart"></i> View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Popupss;
