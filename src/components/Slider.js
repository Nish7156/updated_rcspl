import React from "react";

function Slider() {
  const slides = [1, 2, 3, 4];
  return (
    <>
      <div class="aon-bnr-carousal-area">
        <div class="section-content">
          <div class="owl-carousel aon-bnr1-carousal owl-btn-vertical-center">
            {slides.map((data) => {
              return (
                <div key={data} class="item">
                  <div
                    class="aon-slider1-wrap"
                    styles={{
                      backgroundImage: "url(images/slider-home-1/bg-1.jpg)",
                    }}
                  >
                    <div class="overlay"></div>
                    <div class="container">
                      <div class="aon-slider1-content">
                        <div class="aon-slider1-title">
                          Your Complate Internet it solution providers.
                        </div>
                        <div class="aon-slider1-detail">
                          Maecenas convallis eros eget libero viverra, id
                          sodales libero semper.
                        </div>
                        <div class="aon-slider1-btn">
                          <a
                            class="site-button site-btn-curve"
                            href="booking-form.html"
                          >
                            <i class="feather-plus"></i> Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
