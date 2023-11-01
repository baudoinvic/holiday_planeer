import React, { useState, useEffect } from "react";
import "./User.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify"; 



const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/",
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

     const handleDeleteUser = (id) => {
       if (window.confirm("Are you sure you want to delete?")) {
         let token = localStorage.getItem("token");
         axios({
           url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
           method: "DELETE",
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
           .then((response) => {
             toast.success("Item deleted successfully");
             console.log(response, "Response");
           })
           .catch((error) => {
             toast.error(error.response.data.message);
             console.log(error, "Error");
           });
       }
     };
     

  return (
    <div>
      {/* <h2>Users List</h2> */}

      <div className="user-tour">
        <div className="user-list">
          <div className="user-row user-headers">
            <div className="user-cell">Fullname</div>
            <div className="user-cell">Email</div>
            <div className="user-cell">Role</div>
            <div className="user-cell">Action</div>
          </div>

          {users.map((user) => (
            <div className="user-row" key={user.id}>
              <div className="user-cell">{user.fullName}</div>
              <div className="user-cell">{user.email}</div>
              <div className="user-cell">{user.role}</div>
              <div className="user-cell">
                <div className="action-icons">
                  <BsFillTrashFill
                    onClick={() => handleDeleteUser(user._id)}
                    style={{ cursor: "pointer", color: "red" }}
                  />
                  <Link to = "/dashboard/Edituser">
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Users;
