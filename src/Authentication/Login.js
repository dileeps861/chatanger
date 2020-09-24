import React from "react";
import "./Login.css";
export const Login = () => {
  return (
    <div className="login-div">
      <form action="">
        <h2>Log in</h2>
        <div className="form-group">
          <label htmlFor="firstName">Username/ Email</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Username/ Email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary btn-block">
          Log in
        </button>
        <p className="login-forgot-password">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};
