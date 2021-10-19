import React from "react";
import useAuth from "./../../../hooks/useAuth";

const Register = () => {
  const {
    handleEmailChange,
    handleOnSubmit,
    handlePasswordChange,
    error,
    handleNameChange,
  } = useAuth();
  return (
    <div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div className="login-box">
            <h2 className="text-success">Pease Register</h2>
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                onBlur={handleNameChange}
                className="input-felid"
                id="name"
                placeholder="Your Name"
              />
              <br />
              <input
                onChange={handleEmailChange}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <br />

              <input
                onChange={handlePasswordChange}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <p className="text-danger">{error}</p>
              <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
