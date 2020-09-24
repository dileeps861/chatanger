import React from "react";
import "./Signup.css";

export const Signup = () => {
  return (
    <div className="signup-div">
      <form action="">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Email Id"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Mobile Number</label>
          <input
            className="form-control"
            type="tel"
            name="tel"
            id="tel"
            placeholder="Mobile Number"
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
        <div className="form-group">
          <label htmlFor="confPassword">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confPassword"
            id="confPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign up
        </button>
        <p className="signup-forgot-password">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    </div>
  );
};
