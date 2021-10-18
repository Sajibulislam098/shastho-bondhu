import React from "react";
import useAuth from "./../../../../hooks/useAuth";
import Header from "./../../Header/Header";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="">
          <h1>Please Login</h1>
          <button className="btn btn-warning" onClick={signInWithGoogle}>
            Google Sign IN
          </button>
        </div>
<div className="">
<div className="row d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              <button className="btn btn-primary" onClick={signInWithGoogle}>
                Google Sign in
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            {/* <img className="img-fluid" src={BannerImage} alt="" /> */}
          </div>
        </div>
</div>
        
      </div>
    </div>
  );
};

export default Login;
