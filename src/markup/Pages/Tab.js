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
      <div tabs="true">
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
                  <span>Discotheque </span>
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
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/accomodation.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Accomodation
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/conference.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Conference Hall
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/egyptian3.jpeg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Egyptian Restaurant
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/gym-1.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Gymnasium
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>{" "}
            </TabPane>
            <TabPane tabId="5">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/gothic-rasturant.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Gothic Restaurant
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>
            </TabPane>

            <TabPane tabId="6">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/cinnemon2.jpeg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Cinnamon Restaurant
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
                </div>
              </div>
            </TabPane>

            <TabPane tabId="7">
              <div className="container">
                <div className="row tab-pane fade show active">
                  <div className=" col-lg-6 m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img
                          src={require("./../../images/product/hotel/disco-bar.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item-info">
                      <h2 className="item-title">
                        {/* <Link to={"/shop-product-details"}>Hotel Room</Link> */}
                        Discotheque
                      </h2>
                      <p className="price text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  {/* <div className="dz-col col m-b30">
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
                </div> */}
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
