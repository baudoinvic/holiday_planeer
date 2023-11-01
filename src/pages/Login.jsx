import React, { useState } from "react";
import './Login.css'
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

 const formdata = { email, password };

  const navigate = useNavigate(); 

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(
            "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
            formdata
          );
          if(res.data.user.role == "admin"){
             console.log(res);
             toast.success("login success");
             navigate("/dashboard");
          } else {
            navigate("/")
          }

         
        } catch (error) {
          console.log(error);
        }
      };

 
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          {error && <p className="error-message">{error}</p>}
          <form action="" className="user-login" id="form" onSubmit={handleLogin}>
            <h2 className="login">Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="submit">Login</button>
           

            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
          </form>
        </div>

        <div className="login-image">
          <img src="https://image.freepik.com/free-vector/woman-sitting-with-laptop_186332-332.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Login;






