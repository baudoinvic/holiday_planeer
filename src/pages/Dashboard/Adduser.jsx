import React, { useState } from "react";
import './Adduser.css'



function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleAddUser = () => {
    // Add user handling logic will go here
  };

  return (
    <div>
      <h1 class="title">Add Users</h1>
      <div>
        <input
          type="text"
          id="name"
          placeholder="enter fullnames"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <input
          type="text"
          style={{ color: "#333" }}
          id="name"
          placeholder="enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <br></br>

      <div>
        <input
          type="text"
          id="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br></br>
      <button style={{ width: "450px" }} onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
}

export default Adduser;
