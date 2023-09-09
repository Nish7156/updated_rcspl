import React from "react";
import keyAreas from "../lib/KeyAreas";
import { Info } from "@phosphor-icons/react";

function ServiceCard() {
  return (
    <>
      <div class="aon-blog-area-2 p-t100 p-b100 aon-bg-gray">
        <div class="container ">
          <div class="product">
            <div class="section-head center">
              <h2 class="aon-title">Our Services</h2>
            </div>

            <div class="section-content">
              <div class="container">
                <div class="row ">
                  {keyAreas.map((data) => {
                    return (
                      <div class="col-md-6 p-3 " key={data}>
                        <div
                          class="aon-latest-blog-1 shine-hover wow fadeInDown"
                          data-wow-duration="2000ms"
                        >
                          <div class="post-bx ">
                            <div class="post-thum shine-box">
                              <img
                                title="title"
                                alt=""
                                src="images/blog/latest-blog/pic1.jpg"
                              />
                            </div>
                            <div
                              class="post-info d-flex flex-column justify-content-between "
                              style={{
                                minHeight: "450px",
                                overflowY: "auto",
                              }}
                            >
                              <div>
                                <div class="post-text">
                                  <h4 class="post-title">{data.title}</h4>
                                </div>

                                <div class="aon-post-text">
                                  <p>{data.description}</p>
                                </div>
                              </div>
                              <div class="aon-post-btn">
                                <a
                                  class="aon-latest-blog-btn blog-btn-curve"
                                  href="blog-single.html"
                                >
                                  <Info size={22} color="white" /> Read More
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
