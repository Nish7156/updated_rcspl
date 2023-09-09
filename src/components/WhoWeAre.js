import React from "react";

function WhoWeAre() {
  const cards = [1, 2, 3, 4, 5, 6];

  const SubCards = [1, 2, 3];
  return (
    <>
      <div class="aon-features-area p-t120 p-b90 aon-bg-white">
        <div class="features-bg-top"></div>
        <div class="container">
          <div class="section-content">
            <div class="section-head center">
              <span class="aon-sub-title">Our Great Teem</span>
              <h2 class="aon-title">
                Let’s Discover Our Moscot Features Charter.
              </h2>
            </div>

            <div class="aon-features-top-area">
              <div class="owl-carousel mos-features-carousel aon-owl-custom m-b30">
                {cards.map((data) => {
                  return (
                    <div key={data} class="item">
                      <div
                        class="aon-feas-box-wrap aon-icon-effect wow fadeInDown"
                        data-wow-duration="2000ms"
                      >
                        <div class="aon-feas-box">
                          <div class="aon-feas-icon">
                            <img
                              class="aon-ico"
                              src="images/featuers-icon/pic1.png"
                              alt=""
                            />
                          </div>
                          <h4 class="aon-feas-title">IT Consultancy</h4>
                          <div class="aon-feas-text">
                            Mauris iaculis urna eget est our euismod, in auctor
                            duilo porta. Mauris non porta lacus.
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div class="aon-features-bot-area p-t80">
              <div class="row justify-content-center">
                {SubCards.map((data) => {
                  return (
                    <div
                      key={data}
                      class="col-lg-4 col-md-6 col-sm-12 m-b30 aon-feas-wrap-col"
                    >
                      <div
                        class="aon-icon-effect wow fadeInDown"
                        data-wow-duration="2000ms"
                      >
                        <div class="aon-feas-col">
                          <div class="aon-feas-col-icon">
                            <i class="flaticon-018-rocket"></i>
                          </div>
                          <div class="aon-feas-col-text">
                            <h4 class="aon-feas-col-title">
                              Connect to existing identity systems Control.
                            </h4>
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
