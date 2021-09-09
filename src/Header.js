import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";

import "bootstrap/dist/css/bootstrap.min.css";

import GetAppIcon from "@material-ui/icons/GetApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const Header = () => {
  return (
    <div className="header">
      <div className="header__first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo"
        />
        <div className="header__first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="header__second">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon />
      </div>
      <div className="header__third">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          Login
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-4">
                    <h1>Login</h1>
                    <br></br>
                    <br></br>
                    <p1>
                      Get access to your Orders, Wishlist & Recommendations
                    </p1>

                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                      alt="login"
                    ></img>
                  </div>
                  <div className="col-8">
                    <div class="container ">
                      <form>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email/Mobile Number"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Password"
                          />
                        </div>
                        <p1>
                          By continuing, you agree to Flipkart's Terms of Use
                          and Privacy Policy.
                        </p1>
                        <div class="d-grid gap-2 col-12 mx-auto Got">
                          <button class="btn btn-warning" type="button">
                            Login
                          </button>
                          <p1>OR</p1>
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                          >
                            Request OTP
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__fourth">
        <span>
          <div class="dropdown">
            <button
              class="btn more-btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="!#">
                  <NotificationsIcon />
                  Notification Preferences
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="!#">
                  <BusinessCenterIcon />
                  Sell on Flipkart
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="!#">
                  <LiveHelpIcon />
                  24x7 Customer Care
                </a>
              </li>

              <li>
                <a class="dropdown-item" href="!#">
                  <TrendingUpIcon />
                  Advertise
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="!#">
                  <GetAppIcon />
                  Download App
                </a>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div className="header__fifth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};
export default Header;
