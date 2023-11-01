import React, { useState, useEffect } from "react";
import axios from "axios";
import './Dashboard.css'
import { FaSignOutAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

 



import {
  faTachometerAlt,
  faHome,
  faGlobe,
  faInfoCircle,
  faComments,
  faCalendar,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {
  

  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div class="sidebar">
        <div class="sidebar-left-side">
          <img src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png" />

          <ul class="sidebar-menu">
            <li>
              <Link to="/dashboard">
                <FontAwesomeIcon
                  style={{ color: "#c29d59" }}
                  icon={faTachometerAlt}
                />
                <a style={{ color: "#c29d59" }} href="#">
                  Dashboard
                </a>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/Tour">
                <PiAirplaneTiltFill />
                <a href="">Tour</a>
              </Link>
            </li>

            <Link style={{ color: " #2B2B2B", textDecoration: "none" }} to="">
              <li>
                <FontAwesomeIcon icon={faComments} />
                <a href="">Booking</a>
              </li>
            </Link>

            <li>
              <Link to="/dashboard/Users">
                <FaUsersCog />
                <a href="">Users</a>
              </Link>
            </li>

            <li style={{ marginTop: "20rem" }}>
              <FaSignOutAlt />
              <span onClick={() => navigate("/login")}>
                <a href="">Logout</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-right-side">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
