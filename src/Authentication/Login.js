import React from "react";
import "./Login.css";

export const Login = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.click();
  };
  const clickForgotHandler = (event) => {
    event.preventDefault();
    props.clickForgot();
  };
  return (
    <div className="login-div">
      <form action="" method="POST">
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
          Don't have an account?{" "}
          <a href="/" onClick={clickHandler}>
            Create here
          </a>
        </p>
        <p className="login-forgot-password">
          <a href="/" onClick={clickForgotHandler}>
            Forgot password?
          </a>
        </p>
      </form>
    </div>
  );
};
