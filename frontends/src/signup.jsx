import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom'; 

import "./style.css";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", formData)
      .then((res) => {
        console.log(res);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        alert("Account created successfully");
      })
      .catch((err) => console.log(err));
  };

  const navigateToLogIn = () => {
    navigate("/"); // Navigate to signup page
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <p
            className="w-full font-bold text-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #007991 30%, #78ffd6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Or
          </p>
          <div>
            <button type="submit" onClick={navigateToLogIn}>Already have an account</button>
          </div>
        </form>
      </div>
    </div>
  );
};
