import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import axios from "axios";

import { ToastContainer, toast } from "react-toastify"; 


const Booking = () => {
  const [tourDetails, setTourDetails] = useState(null);
  const [book, setBook] = useState();
  const [Editbooking,setEditbooking] = useState();

  const fetchTourDetails = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTourDetails(response.data); 
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTourDetails();
  }, []);

  // Define the handledelete tour function if you intend to use it.
    
      const handleDeleteBooking = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              toast.success("Booking deleted successfully");
              console.log(response, "response");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.log(error, "Error");
            });
        }
      };



  return (
    <div className="booking">
      <div className="todo">
        <h1 className="title">Bookings</h1>

        <div className="user-container">
          <div className="user-list">
            <div className="user-row user-headers">
              <div className="user-cell">image</div>
              <div className="user-cell">fullName</div>
              <div className="user-cell">email</div>
              <div className="user-cell">phone number</div>
              <div className="user-cell">Date</div>
              <div className="user-cell">number of ticket</div>
              <div className="user-cell">Action</div>
            </div>
          </div>
        </div>

        {tourDetails &&
          tourDetails.map((item, idx) => (
            <div key={idx} className="user-row">
              <div>
                <img
                  style={{ width: "100px" }}
                  src={item.backdropImage}
                  alt="img"
                />
              </div>
              <div className="user-cell">{item.fullname}</div>
              <div className="user-cell">{item.email}</div>
              <div className="user-cell">{item.phone}</div>
              <div className="user-cell">{item.date}</div>
              <div className="user-cell">{item.numberOfTicket}</div>
              <div className="user-cell">
                <div className="action-icons">
                  <BsFillTrashFill
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDeleteBooking(item._id)}
                  />

                  <Link to={`/dashboard/Editbooking/${item._id}`}>
                    <BsFillPencilFill style={{ color: "black" }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
