// import React from 'react'
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";


const Edittour = () => {
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");

  const [initialTour, setInitialTour] = useState({});

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
        setTitle(response?.data?.title);
        setDestination(response?.data?.destination);
        setDuration(response?.data?.duration);
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
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("destination", destination);

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
    <div className="add-tour">
      <ToastContainer />
      <form>
        <h1>Edit tours</h1>
        <input
          onChange={(e) => handleImage(e)}
          type="file"
          id="email"
          placeholder="enter your image"
        />
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          placeholder="How will you spend"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="tile">title</label>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleForm}>update tour</button>
      </form>
    </div>
  );
}

export default Edittour