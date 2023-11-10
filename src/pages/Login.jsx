



    import React, { useState } from "react";
    import "./Login.css";
    import { Navigate, useNavigate } from "react-router-dom";
    import axios from "axios";
    import { toast } from "react-toastify";
    import { Link } from "react-router-dom";

    const Login = () => {
      const [passWord, setPassword] = useState("");
      const [email, setEmail] = useState("");
      const [isLoading, setIsLoading] = useState(false);

      const navigate = useNavigate();

      const handleLogin = async (e) => {
        setIsLoading(true);

        e.preventDefault();
        axios({
          method: "POST",
          url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
          data: {
            email: email,
            password: passWord,
          },
        })
          .then((response) => {
            // Handle login success
            localStorage.setItem("user", JSON.stringify(response.data.user));
            const user = JSON.parse(localStorage.getItem("user"));
            localStorage.setItem("token", response.data.access_token);
            alert("Login successful");
            setTimeout(() => {
              if (user.role === "admin") {
                navigate("../dashboard");
              } else {
                navigate("/");
              }
            }, 5000);
          })
          .catch((error) => {
            // Handle login error
            console.log(error);
            alert("An error happened");
          })
          .finally(() => {
            // Reset isLoading to false whether login succeeds or fails
            setIsLoading(false);
          });

        setEmail("");
        setPassword("");
      };

      return (
        <>
          <div className="login-container">
            <div className="login-form">
              <form
                style={{ marginLeft: "80px" }}
                action=""
                className="user-login"
                id="form"
                onSubmit={handleLogin}
              >
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
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="submit">Login</button>
                {/* {isLoading && <div className="loader">Loading...</div>} */}
                {isLoading && <div className="loader-spinner">Loading...</div>}

                <p className="signup-link">
                  Don't have an account? <Link to="/Signup">Sign up here</Link>
                </p>
              </form>
            </div>

            <div className="login-image">
              <img
                src="https://image.freepik.com/free-vector/woman-sitting-with-laptop_186332-332.jpg"
                alt="Login"
              />
            </div>
          </div>
        </>
      );
    };

    export default Login;



