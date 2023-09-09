import React from "react";

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
                    <img src="images/logo2.png" alt="" />
                  </div>
                  <div class="aon-footer-text-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered predefined.
                  </div>
                  <ul class="aon-social-icon-2 d-flex">
                    <li>
                      <a href="javascript:void(0);">
                        <i class="feather-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="feather-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="feather-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="feather-instagram"></i>
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
                      <i class="feather-mail"></i>
                      <span>info.demo@gmail.com</span>
                    </li>
                    <li>
                      <i class="feather-phone"></i>
                      <span>Call Me (+55) - 66 99 88</span>
                    </li>
                    <li>
                      <i class="feather-map-pin"></i>
                      <span>
                        Sydney Harbour Bridge <br />
                        Circular City of Sydney,
                        <br />
                        Australia.
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
                      placeholder="Enter You Newslatter..."
                    />
                    <button type="button" class="search-btn news-latter-btn">
                      <i class="feather-arrow-right"></i>
                    </button>
                  </form>
                  <ul class="aon-privacy-links">
                    <li>
                      <a href="about.html">Help Center</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy policy</a>
                    </li>
                    <li>
                      <a href="about.html">Career</a>
                    </li>
                  </ul>
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
