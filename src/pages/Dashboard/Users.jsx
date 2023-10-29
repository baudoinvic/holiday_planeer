import React from 'react'
import { useState,useEffect } from 'react';
import './User.css'
import { GiCancel } from "react-icons/gi";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Adduser from './Adduser';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
      
     const addUserToList = (newUser) => {
       setUsers([...users, newUser]);
     };



   const [users, setUsers] = useState([]);
    
       let token = localStorage.getItem("token");
       const accessToken = "";
         
       useEffect(() => {
         const fetchUsers = async () => {
           try {
             const res = await axios.get(
               "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
               
               {
                 method: 'GET',
                 headers: {
                   Authorization: `Bearer ${accessToken}`,
                 },
               }
             );
             console.log(res.data);
             setUsers(res.data);
           } catch (error) {
             // Handle errors
             console.error("Error fetching users:", error);
           }
         };

         fetchUsers();
       }, [accessToken]);

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
            <div className="user-cell">Option</div>
          </div>

          {users.map((user, index) => (
            <li key={index}>
              {user.name}, {user.country}, {user.email}
            </li>
          ))}

          {users.map((user) => (
            <div className="user-row" key={user.id}>
               
              <div className="user-cell">{user.fullName}</div>
              <div className="user-cell">{user.email}</div>
              <div className="user-cell">{user.location}</div>
              <div className="user-cell">
                <div className="action-icons">
                  <BsFillTrashFill style={{ color: "red" }} />
                  <BsFillPencilFill />
                </div>
              </div>
            </div>
          ))}

          <div className="user-row">
            <div className="user-cell">Elia rams</div>
            <div className="user-cell">eliarams@gmail.com</div>
            <div className="user-cell">Congo Drc</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill
                  // onClick={handleDeleteAllUsers}
                  style={{ color: "red" }}
                />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">jonathan</div>
            <div className="user-cell">janathan@gmail.com</div>
            <div className="user-cell">Burundi buja</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">fabiola</div>
            <div className="user-cell">fabiola@gmail.com</div>
            <div className="user-cell">Rwanda kigali</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Denise</div>
            <div className="user-cell">Denise@gmail.com</div>
            <div className="user-cell">Rwanda kigali</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          {/* Repeat this structure for additional rows */}
        </div>
      </div>
    </div>
  );
}

export default Users