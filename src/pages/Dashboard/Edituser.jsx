import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Edituser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; 

const Edituser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

    const handleForm = (e) => {
      e.preventDefault();

      let token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("fullname", fullName);
      formData.append("email", email);
      formData.append("role", role);

      axios({
        method: "PUT",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${email}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success(response.data.message);
            setTimeout(() => {
              navigate("");
            }, 3000);
          } else {
            toast.error("Request failed with status code " + response.status);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    };


 
  return (
    <div className="tab-edit-user">
      <div className="users-editing">
        <ToastContainer />
        <form>
          <h1>Edit user</h1>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <div className="ready">
            <div className="accept">
              <button onClick={handleForm}>Edit user</button>
            </div>
            <div className="Cancel">
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edituser;
