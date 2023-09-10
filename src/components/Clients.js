import React from "react";

function Clients() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div class="aon-case-studies-area aon-bg-white p-t120  p-b90">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-head">
                <span class="aon-sub-title">Clients</span>
                <h2 class="aon-title">Our Clients</h2>
              </div>
            </div>
          </div>

          <div class="section-content">
            <div class="aon-insta-gallery-wrap">
              <div class="owl-carousel mos-case-studies-carousel m-b30 owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div class="owl-stage" style={{ width: "5808px" }}>
                    {arr.map((data) => {
                      return (
                        <div
                          key={data}
                          class="owl-item cloned"
                          style={{ width: "270px", marginRight: "30px" }}
                        >
                          <div class="item">
                            <div
                              class="aon-case-box-wrap shine-hover wow fadeInDown"
                              data-wow-duration="2000ms"
                              style={{
                                visibility: "visible",
                                animationDuration: "2000ms",
                                animationName: "fadeInDown",
                              }}
                            >
                              <div class="aon-case-pic shine-box">
                                <a
                                  class="elem"
                                  href="images/case/pic1.jpg"
                                  title="Nh-16 Highway Bridge"
                                  data-lcl-thumb="images/case/pic1.jpg"
                                >
                                  <img src="images/case/pic1.jpg" alt="#" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div class="owl-nav disabled">
                  <button type="button" role="presentation" class="owl-prev">
                    <i class="feather-chevron-left"></i>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <i class="feather-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
