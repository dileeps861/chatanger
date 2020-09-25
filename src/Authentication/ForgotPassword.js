import React, { useState } from "react";

export const ForgotPassword = (props) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const clickHandler = (event) => {
    event.preventDefault();
    props.click();
  };
  let otpFlag;
  if (isOtpSent)
    otpFlag = (
      <div>
        <label htmlFor="otp"></label>
        <input type="text" name="otp" id="otp" />
      </div>
    );

  const otpClicklHandler = (event) => {
    event.preventDefault();
    setIsOtpSent(true);
  };
  const submitClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="signup-div">
      <form action="" method="POST">
        <h2>Forgot Password</h2>

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
        <button
          type="submit"
          className="btn btn-outline-success btn-block"
          onClick={otpClicklHandler}
        >
          {isOtpSent ? "Resend OTP" : "Send OTP"}
        </button>
        <span className="alert-success" hidden={!isOtpSent}>
          Otp sent succesfully!
        </span>
        {otpFlag}
        <div className="form-group">
          <label htmlFor="password">Enter new Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confPassword">Confirm new Password</label>
          <input
            className="form-control"
            type="password"
            name="confPassword"
            id="confPassword"
            placeholder="Confirm New Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={submitClickHandler}
        >
          Reset
        </button>
        <p className="signup-forgot-password">
          Go to login page{" "}
          <a href="/" onClick={clickHandler}>
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};
