import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState([
    {
      full_name: "",
      user_name: "",
      phone_number: "",
      email: "",
      password: "",
      cpassword: "",
    },
  ]);

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  const PostData = async (e) => {
    e.prevent.Default();

    const { full_name, user_name, phone_number, email, password, cpassword } =
      user;
    const res = fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        user_name,
        phone_number,
        email,
        password,
        cpassword,
      }),
    });
    const data = (await res).json();
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Resistration");
    } else {
      window.alert("Registration successfully");
      console.log("Resistration successfully");

      history.push("/login");
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="form-title">Registration</h1>
          <form method="POST">
            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="full_name"
                  value={user.full_name}
                  onChange={handleInputs}
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="user_name"
                  value={user.user_name}
                  onChange={handleInputs}
                  placeholder="Enter Username"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Email"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phone_Number"
                  value={user.phone_number}
                  onChange={handleInputs}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Enter Password"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="cPassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="gender-details-box">
              <span className="gender-title">Gender</span>
              <div className="gender-category">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" className="btn" onClick={PostData}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
