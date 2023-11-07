import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import axios from "axios";
import './Booking.css'


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
      <div className="here-book">
        <h1 className="title">Bookings</h1>

          <div className="now-fill">
            <div className="ahead">
              <div className="books">image</div>
              <div className="books">fullName</div>
              <div className="books">email</div>
              <div className="books">phone number</div>
              <div className="books">Date</div>
              <div className="books">number of ticket</div>
              <div className="books">Action</div>
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
              <div className="books">{item.fullname}</div>
              <div className="books">{item.email}</div>
              <div className="books">{item.phone}</div>
              <div className="books">{item.date}</div>
              <div className="books">{item.numberOfTicket}</div>
              <div className="books">
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
