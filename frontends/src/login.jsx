import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom'; 

export const LogInForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

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
        alert("Login successfully");
      })
      .catch((err) => console.log(err));
  };

  const navigateToSignup = () => {
    navigate("/signup"); // Navigate to signup page
  };

  return (
    <div className="container">
      <div className="form-container bg-red-700">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className=" !text-green-950">Full Name:</label>
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
            <button type="submit">Sign In</button>
          </div>
          <div className="w-full text-center font-bold"
           style={{
              backgroundImage:
                "linear-gradient(135deg, #007991 30%, #78ffd6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >Or</div>
          <div>
            <button type="button"
             onClick={navigateToSignup}>Create New Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};
