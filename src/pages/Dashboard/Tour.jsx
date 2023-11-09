import React, { useState, useEffect } from "react";
import "./Tour.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";

const Tour = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /*fetching tour*/

  const fetchTour = () => {
    let token = localStorage.getItem("token");
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTours(response.data);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

    /*delete tour*/

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

  const handleNextPage = () => {
    if (currentPage < Math.ceil(tours.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tours.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="todo">
      <ToastContainer />
      <Link to="/dashboard/Addtour">
        <nav className="adding-tour">
          {" "}
          <GrAddCircle style={{ marginRight: "20px" }} />
          Add Tour
        </nav>
      </Link>

      <h1 className="title">Tours</h1>

      <div className="fetching">
        <div className="got-trow">
          <div className="gone">
            <div className="cellule">img</div>
            <div className="cellule">Destination</div>
            <div className="cellule">Duration</div>
            <div className="cellule">Groupsize</div>
            <div className="cellule">Price</div>
            <div className="cellule">Action</div>
          </div>
        </div>

        {currentItems.map((item, idx) => (
          <div key={idx} className="gone">
            <div>
              <img
                style={{ width: "100px" }}
                src={item.backdropImage}
                alt="img"
              />
            </div>
            <div className="cellule">{item.destination}</div>
            <div className="cellule">{item.Duration}</div>
            <div className="cellule">{item.GroupSize}</div>
            <div className="cellule">{item.Price}</div>
            <div className="action-icons">
              <BsFillTrashFill
                onClick={() => deleteTour(item._id)}
                style={{ color: "red", cursor: "pointer" }}
              />
              <Link
                style={{ color: "black" }}
                to={`/dashboard/Edittour/${item._id}`}
              >
                <BsFillPencilFill />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-tour">
        <span className="disabled" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </span>
        {Array.from(
          { length: Math.ceil(tours.length / itemsPerPage) },
          (_, index) => (

            <span classNam="one"
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </span>
          )
        )}
        <span className="last-one"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(tours.length / itemsPerPage)}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Tour;
