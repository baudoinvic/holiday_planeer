import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// import "./Model.css";

import "./../container/../pages/Model.css";
import { Link } from "react-router-dom";

const Model = ({ setMenuOpen }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-panel">
        <div className="modal-content">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="left">
          <img
            style={{ marginTop: "-35px", width: "290px" }}
            src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png"
          ></img>
        </div>

        <ul>
          <Link to="/homepage" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>

          {/* <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li> About </li>
          </Link> */}

          <Link to="/TourList" onClick={() => setMenuOpen(false)}>
            <li>Tour</li>
          </Link>

          <Link to="/Tourdetail" onClick={() => setMenuOpen(false)}>
            <li>Tour details</li>
          </Link>

          <Link to="/Login" onClick={() => setMenuOpen(false)}>
            <li>Login</li>
          </Link>

          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <li>Signup</li>
          </Link>

          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            <li>Contact us</li>
          </Link>

          <Link to ="/dashboard">
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Model;
