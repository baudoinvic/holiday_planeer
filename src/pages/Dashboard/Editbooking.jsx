import React, { useEffect, useState } from "react"; // Import React and useEffect from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const Editbooking = () => {
    
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticket, setTicket] = useState("");
  const [image, setImage] = useState("");

  const fetchTour = () => {
    console.log("haha");
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setFullName(response?.data?.fullname);
        setEmail(response?.data?.email);
        setPhone(response?.data?.phone);
        setTicket(response?.data?.ticket);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Ru");

    let token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("backdropImage", image);
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("ticket", ticket);

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("");
        }, 3000);
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
          <input
            onChange={(e) => handleImage(e)}
            type="file"
            id="email"
            placeholder="enter your image"
          />
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            placeholder="fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="ticket">Number of tickets</label>
          <input
            type="text"
            placeholder="ticket"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          />
          <button onClick={handleForm}>Updating Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Editbooking;
