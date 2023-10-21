import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
   
      },
    }).then((response) => {
      console.log(response, "Response");
      // navigate("/");
      alert("user registered successfuly");
      setIsLoading();

      // Log registered email and password to the console
      console.log("Registered Email:", email);
      console.log("Registered Password:", password);
    })

    .cath((error) => {
      console.log(error);
      alert("An error happened");
     
    });

    
       
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Signup</h2>
          {error && <p className="error-message">{error}</p>}
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                placeholder="enter your mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                placeholder="enter 6 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button-form" onClick={handleSignup}>
              Signup
            </button>
            <p className="signup-link">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </form>
        </div>

        <div className="login-image">
          <img
            src="https://hunterae.com/wp-content/uploads/images/distant-work-flat-concept-videohive-download-31441136-free-hunterae-com-9.jpg"
            alt="Signup"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
