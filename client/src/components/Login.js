import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="container1">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
