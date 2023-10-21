import React, { useState } from "react";
import './Login.css'
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
  };

  const navigate = useNavigate(); 
  
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="user-login"> 
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

            <button className="button-form" onClick={()=>navigate("/Dashboard")}> 
              Login
            </button>

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
