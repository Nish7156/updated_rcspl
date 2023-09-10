import React from "react";
import segments from "../lib/segments";

function Slider() {
  return (
    <>
      <div class="aon-bnr-carousal-area" id="home">
        <div class="section-content">
          <div class="owl-carousel aon-bnr1-carousal owl-btn-vertical-center">
            {segments &&
              segments.map((data) => {
                return (
                  <div key={data?.category} class="item">
                    <div
                      class="aon-slider1-wrap"
                      style={{
                        backgroundImage: `url(${data?.img || ""})`,
                      }}
                    >
                      <div class="overlay"></div>
                      <div class="container">
                        <div class="aon-slider1-content">
                          <div class="aon-slider1-title">{data?.category}</div>
                          {/* <div class="aon-slider1-detail">
                            Preliminary Project Reports (PPR)
                          </div> */}
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
