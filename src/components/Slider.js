import React from "react";
import Islider1 from "../lib/images/slider1.jpg";
import Islider2 from "../lib/images/slider2.jpeg";
import Islider3 from "../lib/images/slider3.jpeg";

function Slider() {
  const slides = [1, 2, 3];

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
                    style={{
                      backgroundImage: `url(${
                        data === 1 ? Islider1 : data === 2 ? Islider2 : Islider3
                      })`,
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
