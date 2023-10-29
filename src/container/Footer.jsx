

import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-planner">
        <div className="row">
          <div className="col">
            <div className="planer">
              <img
                style={{ width: "60%" }}
                src="https://html.geekcodelab.com/holiday-planners/assets/images/white-logo.png"
              ></img>

              <p style={{ fontSize: "20px", width: "90%" }}>
                <b>Holiday Planners</b> sit amet consectetur adipisicing elit.
                Perferendis sapiente tenetur officiis explicabo fugit, sit
                mollitia eum atque excepturi quaerat autem.
                <br></br>
                <input
                  style={{ height: "30px", width: "300px" }}
                  type="email"
                  class="form-input"
                  placeholder="Enter Your Email"
                  required=""
                ></input>
                <br></br>
                <button style={{ marginTop: "10px" }}>Submit</button>
              </p>
            </div>
          </div>

          {/* Second Column: Navigation */}
          <div style={{marginRight: '5rem'}} className="col">
            <ul className="footer-nav">
              <h2>Navigation</h2>
              <hr style={{backgroundColor: '#c29d59'}}></hr>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/">About</a>
              </li>

              <li>
                <a href="/TourList">Tours</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Third Column: Contact Information */}
          <div className="some">
            <div style={{ marginLeft: "5%" }} className="col">
              <h4>Need Help?</h4>
              <hr></hr>

              <p>Call: +1-123-456-7890</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
