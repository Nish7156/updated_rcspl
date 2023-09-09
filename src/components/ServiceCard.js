import React from "react";

function ServiceCard() {
  const ServiceCards = [1, 2, 4, 5, 6, 6, 7];
  return (
    <>
      <div class="aon-blog-area-2 p-t100 p-b100 aon-bg-gray">
        <div class="container">
          <div class="section-content">
            <div class="section-head center">
              <h2 class="aon-title">Latest News & Blogs</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available.
              </p>
            </div>

            <div class="section-content">
              <div class="owl-carousel mos-news-carousel aon-owl-arrow m-b30">
                {ServiceCards.map((data) => {
                  return (
                    <div key={data} class="item">
                      <div
                        class="aon-latest-blog-1 shine-hover wow fadeInDown"
                        data-wow-duration="2000ms"
                      >
                        <div class="post-bx">
                          <div class="post-thum shine-box">
                            <img
                              title="title"
                              alt=""
                              src="images/blog/latest-blog/pic1.jpg"
                            />
                          </div>
                          <div class="post-info">
                            <div class="post-text">
                              <h4 class="post-title">
                                <a href="blog-single.html">
                                  Eko sapien, quis porttitor ipsum etilk.
                                </a>
                              </h4>
                            </div>
                            <div class="post-meta">
                              <ul>
                                <li class="post-author">
                                  <span>by</span>
                                  <a href="blog-single.html"> moscot</a>
                                </li>
                                <li class="post-comment">
                                  <a href="blog-single.html">
                                    October 21, 2022
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="aon-post-text">
                              <p>
                                Duis interdum ex lobortis, suscipit purus
                                congue, euismod odio. Aenean tempor.
                              </p>
                            </div>
                            <div class="aon-post-btn">
                              <a
                                class="aon-latest-blog-btn blog-btn-curve"
                                href="blog-single.html"
                              >
                                <i class="fa fa-plus"></i> Read More
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
    </>
  );
}

export default ServiceCard;
