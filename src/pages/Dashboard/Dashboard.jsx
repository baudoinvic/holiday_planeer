import React from "react";
import "./Dashboard.css";
// import img from "../assets/kotln.svg";
import { Bar } from "react-chartjs-2";

import { FaSignOutAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";


import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import {
  faTachometerAlt,
  faHome,
  faGlobe,
  faInfoCircle,
  faComments,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";


  


const Dashboard = () => {
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
          <h1 class="title">Dashboard</h1>
          <ul class="breadcrumbs"></ul>
          <div class="info-data">
            <div style={{ backgroundColor: "ivory" }} class="card">
              <div class="head">
                <div>
                  
                  <h2>1500</h2>
                  <p>Traffic</p>
               
                </div>
              </div>
              <span class="progress" data-value="40%"></span>
              <span class="label">40%</span>
            </div>
            <div class="card">
              <div class="head">
                <div>
                  <h2>234</h2>
                  <p>Sales</p>
                </div>
                <i class="bx bx-trending-down icon down"></i>
              </div>
              <span class="progress" data-value="60%"></span>
              <span class="label">60%</span>
            </div>
            <div style={{ backgroundColor: "lightgrey" }} class="card">
              <div class="head">
                <div>
                  <h2>465</h2>
                  <p>Pageviews</p>
                </div>
                <i class="bx bx-trending-up icon"></i>
              </div>
              <span class="progress" data-value="30%"></span>
              <span class="label">30%</span>
            </div>
          </div>
          <div class="data">
            <div class="content-data">
              <div class="head">
                <h3>Sales Report</h3>
                <div class="menu">
                  <i class="bx bx-dots-horizontal-rounded icon"></i>
                  <ul class="menu-link">
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Save</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="chart">
                <div id="chart">
                  {/* <Bar data={data} options={options} /> */}
                </div>
              </div>
            </div>
            <div class="content-data">
              <div class="head">
                <h3>Chatbox</h3>
                <div class="menu">
                  <i class="bx bx-dots-horizontal-rounded icon"></i>
                  <ul class="menu-link">
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Save</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
  
  
};

export default Dashboard;
