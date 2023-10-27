import React, { useState } from "react";
import "./Tour.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import Addtour from "./Addtour";
import { Link } from "react-router-dom";

const Tour = () => {
  const [tours, setTours] = useState([]);

  const fetchTour = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTours(response.data);
        toast.success(response.data.message);
      })
      .catch((error) => {
        // toast.error(error.response.data.message)
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <div className="">
      <Link to="/dashboard/Addtour">
        <nav className="add-user-btn">Add Tour</nav>
      </Link>

      <h1 class="title">Tours</h1>
    

  <div className="user-container">
  <div className="user-list">
    <div className="user-row user-headers">
      <div className="user-cell">img</div>
      <div className="user-cell">Destination</div>
      <div className="user-cell">Duration</div>
      <div className="user-cell">Group Size</div> 
      <div className="user-cell">Price</div> 
      <div className="user-cell">Action</div>
    </div>
  </div>

  {tours.map((item, idx) => (
    <div key={idx} className="user-row">
     <div><img style={{width: '100px'}} src={item.backdropImage} alt="img" /></div>
      <div className="user-cell">{item.destination}</div>
      <div className="user-cell">{item.Duration}</div> 
      <div className="user-cell">{item.GroupSize}</div>
      <div className="user-cell">{item.price}</div>
      <div className="user-cell">
        <div className="action-icons">
          <BsFillTrashFill style={{ color: "red" }} />
          <BsFillPencilFill />
        </div>
      </div>
    </div>
  ))}
</div>
</div>
   
  );
};

export default Tour;
