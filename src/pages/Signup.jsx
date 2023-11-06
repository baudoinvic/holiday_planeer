import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [location, setLoCation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Added phoneNumber state

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State to store user information
  const [userInformation, setUserInformation] = useState(null);

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
        fullname: fullname,
        location: location,
        phoneNumber: phoneNumber, // Include phoneNumber in the data
      },
    })
      .then((response) => {
        console.log(response, "Response");
        alert("User registered successfully");
        navigate("/Homepage")
        setIsLoading(false);

        // Save user information in state
        setUserInformation({
          email: email,
          fullname: fullname,
          location: location,
          phoneNumber: phoneNumber,
        });

        // Log registered email, password, fullname, location, phoneNumber, and role to the console
        console.log("Registered Email:", email);
        console.log("Registered Password:", password);
        console.log("Fullname:", fullname);
        console.log("Location:", location);
        console.log("Phone Number:", phoneNumber);
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened");
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          {error && <p className="error-message">{error}</p>}
          <form style={{ marginLeft: "80px" }}>
            <h2 style={{ marginTop: "-15px" }}>Signup</h2>
            <div className="form-group">
              <label>Fullname</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
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
            <div className="form-group">
              <label>Location</label>{" "}
              {/* Corrected the label text to "Location" */}
              <input
                type="text"
                value={location}
                onChange={(e) => setLoCation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button className="button-form" onClick={handleSignup}>
              Signup
            </button>
            <p className="signup-link">
              Already have an account? <Link to = "/Login">Login here</Link>
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
