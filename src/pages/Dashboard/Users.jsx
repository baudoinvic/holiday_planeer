import React from 'react'
import { useState,useEffect } from 'react';
import './User.css'
import { GiCancel } from "react-icons/gi";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Adduser from './Adduser';
import axios from 'axios';


const Users = () => {
      
  const [showAddUser, setShowAddUser] = useState(false);
   const [users, setUsers] = useState([]);

         useEffect(() => {
           const fetchuser = async () => {
             const res = await axios.get(
               "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users"
             );
             console.log(res.data);
             setUsers(res.data);
           };
           fetchuser();
         }, []);







          /*new user*/

          const handleUserSignup = async (newUser) => {
            try {
            
              const response = await axios.post(
                "https://holiday-planner-4lnj.onrender.com/api/v1/auth/register",
                newUser
              );

              setUsers([...users, response.data]);

              setShowAddUser(false);
            } catch (error) {
              console.error("Error creating user:", error);
            }
          };

    

  const toggleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  return (
    <div>
      <nav className="add-user-btn" onClick={toggleAddUser}>
        Add User
      </nav>

      {showAddUser && <Adduser onUserSignup={handleUserSignup} />}

      <div className="user-container">
        <div className="user-list">
          <div className="user-row user-headers">
            <div className="user-cell">Fullname</div>
            <div className="user-cell">Email</div>
            <div className="user-cell">Country</div>
            <div className="user-cell">Option</div>
          </div>

         

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
            <div className="user-cell">elia@gmail.com</div>
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
            <div className="user-cell">Adolph clark</div>
            <div className="user-cell">adolph@gmail.com</div>
            <div className="user-cell">kenya nairobi</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">jonathan</div>
            <div className="user-cell">janathan@gmail.com</div>
            <div className="user-cell">Rwanda kigali</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Fabrice fab</div>
            <div className="user-cell">fabrice@gmail.com</div>
            <div className="user-cell">Congo Drc</div>
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