import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the PHP script
    fetch("send_email.php", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data); // Show the response from the PHP script
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container" id="contact">
      <div className="">
        <div className="">
          <div
            className="aon-contact-wrap"
            style={{
              border: "black",
              borderWidth: "1px",
              borderColor: "gray",
              borderStyle: "solid",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            <div className="sf-con-form-title m-b30">
              <h3 className="m-b10">Contact Us</h3>
              <p>
                Phasellus ac consequat turpis, sit amet. Please Required fields
                mark *
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group aon-form-label">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Your Name"
                      className="form-control bottom-line"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group aon-form-label">
                    <input
                      type="text"
                      name="email"
                      placeholder="Phone Number"
                      className="form-control bottom-line"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group aon-form-label">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Mail"
                      className="form-control bottom-line"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group aon-form-label">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="form-control bottom-line"
                      rows="4"
                      required=""
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="sf-contact-submit-btn">
                <button type="submit" className="site-button site-btn-curve">
                  Send Message{" "}
                  <i className="btn-arrow-icon fa fa-angle-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
