import React from "react";

function Aboutus() {
  return (
    <>
      <div className="aon-about-comp-area p-t120 p-b80 aon-bg-gray" id="about">
        <div className="container">
          <div className="section-content">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow fadeInDown"
                data-wow-duration="1000ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1000ms",
                  animationName: "fadeInDown",
                }}
              >
                <div className="aon-product-left">
                  <div className="aon-pro-pic1">
                    <img src="images/pro-pic2.jpg" alt="" />
                  </div>
                  <div className="aon-pro-pic2">
                    <img src="images/pro-pic1.jpg" alt="" />
                  </div>
                  <span className="aon-pro-pic-label"> Since 2018</span>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeInDown"
                data-wow-duration="2000ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2000ms",
                  animationName: "fadeInDown",
                }}
              >
                <div className="aon-about-comp-right">
                  <span className="aon-sub-title">
                    About Realm Consulting Services Pvt. Ltd.
                  </span>
                  <h2 className="aon-pro-title">
                    Your Trusted Partner for Project Solutions
                  </h2>
                  {/* Updated description */}
                  <p>
                    Realm Consulting Services Pvt. Ltd. (formerly Realm
                    Financial Consultants Pvt. Ltd.), established in 2006, is
                    your trusted partner for comprehensive project-related
                    services. With branches in Thane, Nashik, and Aurangabad in
                    Maharashtra, we excel in providing one-stop solutions for
                    manufacturing projects. Our services include licenses,
                    approvals, permissions, consents, NOC’s, subsidies,
                    incentives, and project finance consultancy.
                  </p>
                  <p>
                    We are proud to be led by a team of highly qualified,
                    experienced, and dynamic professionals, including Chartered
                    Accountants, Company Secretaries, Advocates, Lawyers, MBAs,
                    Chartered Engineers, Architects, and Government-Approved
                    Valuators. This diverse expertise allows us to deliver
                    tailored solutions to meet the unique needs of our esteemed
                    clients.
                  </p>
                  <p>
                    Our offerings extend to providing various reports such as
                    Survey, Analysis, Investigation & Search Reports, tailored
                    to the specific requirements of entrepreneurs. These reports
                    provide comprehensive insights into technical, legal,
                    financial, marketing, and operational aspects of proposed
                    projects, ensuring feasibility and viability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
