import React, { useState, useEffect } from "react";
import axios from "axios";
import './Dashboard.css'
import { FaSignOutAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import {
  faTachometerAlt,
  faHome,
  faGlobe,
  faInfoCircle,
  faComments,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {

  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-left-side">
          {/* <img src={img}></img> */}
          <img
            style={{ width: "140px" }}
            src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png"
          ></img>

          <Link to="/dashboard">
            <li>
              <FontAwesomeIcon
                style={{ color: "#c29d59" }}
                icon={faTachometerAlt}
              />
              <a style={{ color: "#c29d59" }} href="#">
                Dashboard
              </a>
            </li>
          </Link>

          <Link to="/dashboard/Tour">
            <li>
              <PiAirplaneTiltFill />
              Tour
            </li>
          </Link>

          <li>
            <FontAwesomeIcon icon={faComments} />
            <a href="#">Booking</a>
          </li>

          <Link to="/dashboard/Users">
            <li>
              <FaUsersCog />
              Users
            </li>
          </Link>

          <FaSignOutAlt style={{ marginTop: "20rem" }} />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Logout
          </span>
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
