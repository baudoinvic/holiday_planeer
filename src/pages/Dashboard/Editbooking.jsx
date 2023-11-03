import React, { useEffect, useState } from "react"; // Import React and useEffect from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const Editbooking = () => {
   

    const navigate = useNavigate();
    const params = useParams();
    let bookId = params.id;
    const [bookName, setBookName] = useState();
    const [bookEmail, setBookEmail] = useState();
    const [bookPhone, setBookPhone] = useState();
    const [bookDate, setBookDate] = useState();
    const [bookTickets, setBookTickets] = useState();
    const fetchBook = () => {
      let token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${bookId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setBookName(response?.data?.fullname);
          setBookEmail(response?.data?.email);
          setBookPhone(response?.data?.phone);
          setBookDate(response?.data?.date);
          setBookTickets(response?.data?.numberOfTickets);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchBook();
    }, []);
    const submitNewBook = (e) => {
      e.preventDefault();
      // setIsLoading(true);
      const data = {
        fullname: bookName,
        email: bookEmail,
        phone: bookPhone,
        date: bookDate,
        numberOfTickets: bookTickets,
      };
      let token = localStorage.getItem("token");
      axios({
        method: "PUT",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${bookId}`,
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((Response) => {
          console.log(Response);
          toast.success(Response.data.message);
          setTimeout(() => {
            navigate("/dashboard/Booking");
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    };


  return (
    <div className="booking-edit">
      <div className="add-tour">
        <ToastContainer />
        <form>
          <h1>Edit Booking</h1>

          <label htmlFor="name">Full Name</label>
          <div className="form-group">
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <label htmlFor="email">Email</label>
          <div className="form-group">
            <input
              type="email"
              value={bookEmail}
              onChange={(e) => setBookEmail(e.target.value)}
            />
          </div>

          <label htmlFor="phone">Phone</label>
          <div className="form-group">
            <input
              type="tel"
              value={bookPhone}
              onChange={(e) => setBookPhone(e.target.value)}
            />
          </div>

          <label htmlFor="date">Date</label>
          <div className="form-group">
            <input
              type="date"
              value={bookDate}
              onChange={(e) => setBookDate(e.target.value)}
            />
          </div>

          <label htmlFor="tickets">Number of Tickets</label>
          <div className="form-group">
            <input
              type="number"
              value={bookTickets}
              onChange={(e) => setBookTickets(e.target.value)}
            />
          </div>

          <button onClick={submitNewBook}>Updating Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Editbooking;
