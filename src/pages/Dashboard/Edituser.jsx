import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Edituser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const Edituser = () => {
      const navigate = useNavigate();
      const params = useParams();
      let userId = params.id;


    const [isLoading,setIsLoading] = useState(false)
     const [fullName, setFullname] = useState("");
     const [email, setEmail] = useState("");
     const [role, setRole] = useState("");
     const [initialTour, setInitialTour] = useState({});

      const fetchUsers = () => {
        
        let token = localStorage.getItem("token");
        axios({
          method: "GET",
          url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setFullname(response?.data?.fullName);
            setEmail(response?.data?.email);
            setRole(response?.data?.role);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        fetchUsers();
      }, []);

     

      const handleForm = (e) => {
        e.preventDefault();
        console.log("Ru");
        setIsLoading(true)

        let token = localStorage.getItem("token");
        console.log("token", token)

        const data = {
          "fullName": fullName,
          "role": role,
          "email": email,
        }

        // const formData = new FormData();
        // formData.append("fullname", fullName);
        // formData.append("email", email);
        // formData.append("role", role);

        axios({
          method: "PUT",
          url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${userId}`,
          data: data,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response);
            toast.success("user is successfully edited");
            setTimeout(() => {
              navigate("/dashboard/Users");
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
    <div className="tab-edit-user">
      <div className="users-editing">
        <ToastContainer />
        <form>
          <h1>Edit user</h1>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            placeholder="update Fullname"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="update email"
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
              <button onClick={handleForm}>Update user</button>
              {isLoading && <div className="loader-spinner">Loading...</div>}
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
