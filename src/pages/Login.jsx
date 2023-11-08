import React, { useState } from "react";
import './Login.css'
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//  const formdata = { email, password };

//   const navigate = useNavigate(); 

//       const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post(
//             "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
//             formdata
//           );
         

           
//           if(res.data.user.role == "admin"){
//              console.log(res);
//              toast.success("login success");
//              navigate("/dashboard");
//           } else {
//             navigate("/")
//           }
           
         
  
         
//         } catch (error) {
//           console.log(error);
//         }
         
//       };

   
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
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(response, "response");
        localStorage.setItem("token", response.data.access_token);
        const token = localStorage.getItem("token");
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
        console.log(error);
        alert("An error happened");
      });
    setEmail("");
    setPassword("");
  };

 
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          {/* {error && <p className="error-message">{error}</p>} */}
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

            <p className="signup-link">
              Don't have an account? <Link to = "/Signup">Sign up here</Link>
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






