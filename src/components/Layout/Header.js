import React, { useState, useEffect } from "react";
import keyAreas from "../../lib/Constant";

function Header() {
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header class="site-header header-style-1 mobile-sider-drawer-menu">
        <div class="top-bar">
          <div class="container">
            <div class="top-bar-row">
              <div class="top-bar-left">
                <div class="logo-header">
                  <div class="logo-header-inner logo-header-one">
                    <a href="index.html">
                      <img src="images/MainLogo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="top-bar-right">
                <div class="top-bar-two">
                  <div class="top-bar-two-left"></div>
                  <div class="top-bar-two-right">
                    <div class="top-bar-two-col aon-brand-marketing m-r30">
                      Unlocking Cost-Efficiency Excellence:
                      <a href="#"> Free Consultant</a>
                    </div>
                    <div class="top-bar-two-col">
                      <a
                        href="#"
                        class="site-button site-btn-curve aon-get-app-btn"
                      >
                        + Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sticky-header main-bar-wraper navbar-expand-lg">
          <div class="main-bar">
            <div class="container">
              <div class="mobile-logo-left">
                <div class="logo-header">
                  <div class="logo-header-inner logo-header-one">
                    <a href="index.html">
                      <img src="images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                class="navbar-toggler collapsed"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar icon-bar-first"></span>
                <span class="icon-bar icon-bar-two"></span>
                <span class="icon-bar icon-bar-three"></span>
              </button>
              {showLogo && (
                <div
                  class=""
                  style={{
                    height: "auto",
                    width: "190px",
                  }}
                >
                  <a href="index.html">
                    <img src="images/MainLogo.png" alt="" />
                  </a>
                </div>
              )}

              <div class="nav-animation header-nav header-nav2 navbar-collapse collapse d-flex">
                <ul class="nav navbar-nav">
                  <li class="has-child current-menu-item">
                    <a href="javascript:;">Home</a>
                  </li>
                  <li class="has-child">
                    <a href="javascript:;">Services</a>
                    <ul class="sub-menu" style={{ width: "500px" }}>
                      {keyAreas.map((data) => {
                        return (
                          <li key={data}>
                            <a href="about.html">{data.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li class="has-child">
                    <a href="javascript:;">About us</a>
                  </li>
                  <li class="has-child">
                    <a href="javascript:;">Contact us</a>
                  </li>
                </ul>
              </div>

              <div class="extra-nav header-2-nav">
                <div class="extra-cell">
                  <ul class="aon-social-icon-3 d-flex">
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="extra-cell">
                  <div class="aon-live-chats">
                    <div class="aon-live-icon">
                      <i class="flaticon-003-chat-1"></i>
                    </div>
                    <div class="aon-live-text">
                      <strong>Your Cost-Saving Partner</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
