import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Nice Camera World</h1>
                <p className="mt-4 ">
                  <small>
                  Search Product Photography Manchester, Top Results From Trusted Resources. Search Product Photography Manchester, Get Expert Advice and Curated Content on Top10quest. Explore the Best Info Now. 100+ Unique Results.
                  </small>
                </p>

                <p className="mt-5 text-start">
                  <small>&copy; All rights reserved-camera world.com</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Products</li>
                  <li className="footer-menu">Review</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container text-start">
                <h3>Subscribe</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;