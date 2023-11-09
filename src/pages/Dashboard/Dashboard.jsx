
import axios from "axios";
import './Dashboard.css'
import { FaSignOutAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate,Navigate } from "react-router-dom";
import { useEffect } from "react";
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
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

   useEffect(()=> {
    console.log(user);
    console.log(token);
    if(token && user.role=="user"){
      navigate("/");
    }else if(!token){
      navigate("/login");
    }
   }
   )



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

            <Link
              style={{ color: " #2B2B2B", textDecoration: "none" }}
              to="/dashboard/Booking"
            >
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
                <Link to="/Login">Logout</Link>
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
