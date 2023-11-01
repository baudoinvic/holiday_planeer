import React, { useState, useEffect } from "react";
import "./User.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Make sure you import 'toast' for showing notifications

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/users/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /*delete user */
  const deleteUser = async (id) => {
    if (window.confirm("Do you want to delete this User?")) {
      try {
        const { data } = await axios.delete(
          `https://holiday-planner-4lnj.onrender.com/api/v1/users/delete/${id}`
        );
        if (data) {
          toast.success("User successfully deleted");
          fetchUsers();
        } else {
          toast.error("Failed to delete the User");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message;
          toast.error("Error in deleting the User: " + errorMessage);
        } else {
          toast.error("An error occurred while deleting the User");
        }
      }
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <Link to="/dashboard/Adduser">
        <nav style={{ marginTop: "-50px" }} className="add-user-btn">
          New User
        </nav>
      </Link>

      <div style={{ marginTop: "5rem" }} className="user-container">
        <div className="user-list">
          <div className="user-row user-headers">
            <div className="user-cell">Fullname</div>
            <div className="user-cell">Email</div>
            <div className="user-cell">Country</div>
            <div className="user-cell">Action</div>
          </div>

          {users.map((user) => (
            <div className="user-row" key={user.id}>
              <div className="user-cell">{user.fullName}</div>
              <div className="user-cell">{user.email}</div>
              <div className="user-cell">{user.location}</div>
              <div className="user-cell">
                <div className="action-icons">
                  <BsFillTrashFill
                    onClick={() => deleteUser(user.id)}
                    style={{ color: "red" }}
                  />
                  <BsFillPencilFill />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
