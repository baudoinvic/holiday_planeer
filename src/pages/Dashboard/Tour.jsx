import React, { useState, useEffect } from "react";
import "./Tour.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Tour = () => {
  const navigate = useNavigate();
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
        navigate("/dashboard/tour");
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);


     /*delete tour */


  const deleteTour = async (id) => {
    if (window.confirm("Do you want to delete this Tour?")) {
      try {
        const { data } = await axios.delete(
          "https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/" + id
        );
        if (data) {
          toast.success("Tour successfully deleted");
        
          fetchTour();
        } else {
          toast.error("Failed to delete the Tour");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message;
          toast.error("Error in deleting the Tour: " + errorMessage);
        } else {
          toast.error("An error occurred while deleting the Tour");
        }
      }

        
    }
  };
   

  return (
    <div className="">
      <Link to="/dashboard/Addtour">
        <nav className="add-user-btn">Add Tour</nav>
      </Link>

      <h1 className="title">Tours</h1>

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
            <div>
              <img
                style={{ width: "100px" }}
                src={item.backdropImage}
                alt="img"
              />
            </div>
            <div className="user-cell">{item.destination}</div>
            <div className="user-cell">{item.Duration}</div>
            <div className="user-cell">{item.GroupSize}</div>
            <div className="user-cell">{item.price}</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill
                  onClick={() => deleteTour(item._id)}
                  style={{ color: "red", cursor: "pointer" }}
                />
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
