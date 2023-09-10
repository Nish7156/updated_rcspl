import React from "react";
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  EnvelopeSimple,
  At,
  PhoneCall,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div>
      <footer class="site-footer footer-style-1">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-12">
                <div class="sf-widget-link f-margin">
                  <div class="aon-footer-logo-2">
                    <img src="images/MainLogo.png" alt="" />
                  </div>
                  <div class="aon-footer-text-2">
                    Realm Consulting Services: Your Trusted Partner for
                    Strategic Solutions and Growth.
                  </div>
                  <ul class="aon-social-icon-2 d-flex">
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
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="aon-ftr-info-wrap f-margin">
                  <h4 class="aon-f-title-2">Information</h4>
                  <ul class="aon-ftr-info">
                    <li>
                      <i class="feather-mail"></i> <span>info@rcspl.co.in</span>
                    </li>
                    <li>
                      <i class="feather-phone"></i>{" "}
                      <span>Call Me 98220 59460</span>
                    </li>
                    <li>
                      <i class="feather-map-pin"></i>{" "}
                      <span>
                        1314, 13th Floor, C1, Opal Square <br />
                        CS. G. Barve Road, <br />
                        Wagle Estate, Thane - 400604, Maharashtra, India.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12"></div>

              <div class="col-lg-3 col-md-6 col-12">
                <div class="aon-ftr-info-wrap f-margin">
                  <h4 class="aon-f-title-2">Free Consultaion</h4>
                  <div class="aon-free-cons">
                    Book Your Free It Consultation.
                  </div>
                  <form
                    role="search"
                    id="news-latter"
                    action="/search"
                    method="get"
                    class="news-latter-box"
                  >
                    <input
                      class="form-control"
                      value=""
                      name="q"
                      type="search"
                      placeholder="Enter You email..."
                    />
                    <button type="button" class="search-btn news-latter-btn">
                      <i class="feather-arrow-right"></i>
                    </button>
                  </form>
                  {/* <ul class="aon-privacy-links">
                    <li>
                      <a href="about.html">Help Center</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy policy</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
