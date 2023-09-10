import React, { useState, useEffect } from "react";
import keyAreas from "../../lib/KeyAreas";
import { CurrencyInr } from "@phosphor-icons/react";
import useScrollSpy from "../../Hooks/useScrollSpy";
import { mainMenus } from "../../lib/constant";
import { scrollToSection } from "../../lib/healper";

function Header() {
  const [showLogo, setShowLogo] = useState(false);
  const activeSection = useScrollSpy(mainMenus);
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
  function generateSubMenu(subMenuData) {
    if (!subMenuData) {
      return null;
    }

    return (
      <ul className="sub-menu" style={{ width: "600px" }}>
        {subMenuData.map((item, index) => (
          <li key={index} onClick={() => scrollToSection(`${item.id}`)}>
            <a href={``}>{item.subTitle}</a>
          </li>
        ))}
      </ul>
    );
  }

  const menuItems = mainMenus.map((menu, index) => (
    <li className={menu.subMenu ? "has-child" : ""} key={index}>
      <a href={`#${menu.id}`}>{menu.title}</a>
      {generateSubMenu(menu.subMenu)}
    </li>
  ));
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
                      <img src="images/MainLogo.png" alt="" />
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
                  class="d-none d-md-block"
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
                <ul class="nav navbar-nav">{menuItems}</ul>
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
                      <CurrencyInr size={32} color="black" />
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
