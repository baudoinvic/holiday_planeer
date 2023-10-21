import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../container/Model";


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
            <div className="menu-overlay" onClick={closeMenu}>
              {/* <nav>
                <ul className="dropdown-menu">
                  <Link to="/">
                    {" "}
                    <li> Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <Link to="/Contact">
                    <li>Contact</li>
                  </Link>

                  <Link to="/login">
                    <button
                      style={{ width: "80px" }}
                      type="button"
                      onClick={toggleLogin}
                    >
                      Login
                    </button>
                  </Link>

                  <Link to="/Signup">
                    <button style={{ marginLeft: "20px", width: "70px" }}>
                      Signup
                    </button>
                  </Link>
                </ul>
              </nav> */}
            </div>
          )}
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
