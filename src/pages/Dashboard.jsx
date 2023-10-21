import React from "react";
import "./Dashboard.css";
import img from "../assets/kotln.svg";
import { FaSignOutAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";



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
          <img src={img}></img>
          <h3>Kleon</h3>
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faHome} />
            <a href="#">Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} />
            <a style={{ color: "#c29d59" }} href="#">
              Tour
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInfoCircle} />
            <a href="#">Tour detail</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} />
            <a href="#">Chat</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <a href="#">Calendar</a>
          </li>
          <h2 title="popular">popular places</h2>
          <FontAwesomeIcon style={{ color: "red" }} icon={faCircle} />
          <span style={{ marginLeft: "1rem" }}>Norway</span>
          <br></br>

          <FaSignOutAlt style={{ marginTop: "2rem" }} />
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
          <h1  class="title">Dashboard</h1>
          <ul class="breadcrumbs">
          
              {/* <a href="#">Home</a> */}
            
            {/* <li class="divider">/</li> */}
           
              {/* <a href="#" class="active">
                Dashboard
            </a> */}

          </ul>
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
