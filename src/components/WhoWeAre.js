import React from "react";
import expertise from "../lib/expertise";
import segments from "../lib/segments";

function WhoWeAre() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div class="aon-features-area p-t20 p-b90 aon-bg-white">
        <div class="features-bg-top"></div>
        <div class="container">
          <div class="section-content">
            <div class="section-head center">
              {/* <span class="aon-sub-title">Our Great Teem</span> */}
              <h2 class="aon-title">SEGMENTS DEALTH WITH</h2>
            </div>

            <div class="aon-features-top-area">
              <div class="owl-carousel mos-features-carousel aon-owl-custom m-b30">
                {segments.map((data) => {
                  return (
                    <div key={data} class="item">
                      <div
                        class="aon-feas-box-wrap aon-icon-effect wow fadeInDown"
                        data-wow-duration="2000ms"
                      >
                        <div class="aon-feas-box" style={{minHeight:"614px"}}>
                          <div class="aon-feas-icon">
                            <img class="aon-ico" src={data.icon || ""} alt="" />
                          </div>
                          <h4 class="aon-feas-title">{data.category}</h4>
                          <div class="aon-feas-text text-start h-48">
                            {data.services && data.services.length > 0 && (
                              <ul className="list-unstyled">
                                {data?.services?.map((key, keyIndex) => (
                                  <li
                                    className="mx-2 d-flex align-items-start "
                                    key={keyIndex}
                                  >
                                    <i className="feather-check m-2"></i>
                                    <div>{key}</div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div class="aon-features-bot-area p-t80">
              <div class="section-head center">
                <h2 class="aon-title">Why Choose Us ?</h2>
              </div>
              <div class="row justify-content-center">
                {expertise.map((data) => {
                  return (
                    <div
                      key={data}
                      class="col-lg-6 col-md-6 col-sm-12 m-b30 aon-feas-wrap-col"
                    >
                      <div
                        class="aon-icon-effect wow fadeInDown"
                        data-wow-duration="2000ms"
                      >
                        <div class="aon-feas-col d-flex align-items-center">
                          <div class="aon-feas-col-icon">{data.icon}</div>
                          <div class="d-flex flex-column">
                            <div class="aon-feas-col-text">
                              <h4 class="aon-feas-col-title">{data.title}</h4>
                            </div>

                            <div class="aon-feas-text">{data.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
