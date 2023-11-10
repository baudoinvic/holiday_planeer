import React, { useEffect, useState } from "react"; // Import React and useEffect from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const Editbooking = () => {
   

     const navigate = useNavigate();
     const params = useParams();
     let tourId = params.id;

     const [isLoading, setIsLoading] = useState(false);
     const [fullName, setFullName] = useState("");
     const [bookEmail, setBookEmail] = useState("");
     const [bookPhone, setBookPhone] = useState("");
     const [bookTicket, setBookTicket] = useState("");
     const [bookDate, setBookDate] = useState("");
     const fetchBook = () => {
       console.log(tourId);
       let token = localStorage.getItem("token");
       axios({
         method: "GET",
         url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${tourId}`,
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
         .then((response) => {
           setFullName(response?.data?.fullname);
           setBookEmail(response?.data?.email);
           setBookPhone(response?.data?.phone);
           setBookTicket(response?.data?.ticket);
           setBookDate(response?.data?.date);
         })
         .catch((error) => {
           console.log(error);
         });
     };
     useEffect(() => {
       fetchBook();
     }, []);
     const handleForm = (e) => {
       e.preventDefault();
       setIsLoading(true)


       const data = {
         tourId: tourId,
         fullname: fullName,
         email: bookEmail,
         phone: bookPhone,
         date: bookDate,
         numberOfTickets: bookTicket,
       };
       let token = localStorage.getItem("token");
       axios({
         method: "PUT",
         url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${tourId}`,
         data: data,
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
         },
       })
         .then((response) => {
           console.log(response);
           toast.success(response.data.message);
           toast.success("Booking updated");
           setTimeout(() => {
             navigate(`/Dashboard/Booking`);
           }, 3000);
         })
       
         .catch((error) => {
           console.log(error);
           toast.error(error.message);
         })

           .finally(() => {
            setIsLoading(false);
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={bookTicket}
              onChange={(e) => setBookTicket(e.target.value)}
            />
          </div>

          <button onClick={handleForm}>Updating Booking</button>
          {isLoading && <div className="loader-spinner">Loading...</div>}
        </form>
      </div>
    </div>
  );
};

export default Editbooking;
