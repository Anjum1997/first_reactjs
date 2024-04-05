

import React, { useState } from "react";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password : "",
    confirm -password : ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { userData });
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userData);

  return (
    <div className="section">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input
          value={userData.name}
          name="name"
          type="text"
          placeholder="Enter name"
        />
        <input
          value={userData.email}
          name="email"
          type="text"
          placeholder="Enter Email"
        />
    
        <input
          value={userData.password}
          name="password"
          type="password"
          placeholder="Enter Address"
        />
        <input
          value={userData.confirm-password}
          name="confirm-password"
          type="confirm-password"
          placeholder="confirm password"
        />
        <input
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default User;