import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../container/Model";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


const Navbar = ({ toggleLogin }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbarr">
      {isMenuOpen && <Model setMenuOpen={setMenuOpen} />}
      <div>
        <div className="nav-tech">
          <div class="contact-info"></div>

          {isMenuOpen && (
            <div className="menu-overlay" onClick={closeMenu}></div>
          )}
        </div>

        <div className="nav-container">
          <div className="navbar-top">
            <div className="left">
              <div className="contact-item left-contact">
                <FiMail className="nav-icon" />
                <a>holidayplanners@gmail.com</a>
              </div>
              <div className="contact-item">
                <FiPhoneCall className="nav-icon" />
                <a>+1234567890</a>
              </div>
            </div>

            <div className="right">
              <a href="">
                <FaFacebookF className="iconn" />
                <b className="whitee">|</b>
                <FaInstagram className="iconn" />
                <b className="whitee">|</b>
                <FaTwitter className="iconn" />
              </a>
            </div>
          </div>
        </div>

        <div className="navBar">
          <div className="logo">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png"></img>
          </div>

          <div className="navButton">
            <button>RESERVE</button>
            <button className="search-icon">
              <AiOutlineSearch />
            </button>
            <button className="humburger" onClick={toggleMenu}>
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
