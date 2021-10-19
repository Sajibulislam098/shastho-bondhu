import React from "react";
import ReactPlayer from "react-player";
import Banner from "../Banner/Banner";
import Guide from "../Guide/Guide";

import Services from "../Services/Services";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div id="home" >
    
      <Banner></Banner>
      <div className="mt-5 container ">
       <div className="row"> 
       <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
          className="w-100  "
            src="https://www.shasthobondhu.com/assets/uploads/home_content/077761300_1559630424.png"
            alt=""
          />
        </div>
        <div className="col-md-7 d-flex justify-content-center mt-3 p-2">
        <div> <h3>LIVE Interactions</h3>
         <h6 className="text-danger mt-2 mb-3">with the specialists from the top Hospitals in India</h6>
         
          <ReactPlayer width="400px" height="300px" controls url="https://youtu.be/ogIoWTVOBTE" ></ReactPlayer></div>
        </div></div>
      </div>
      <Services></Services>

      <div className="container">
            <div className="mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-75" src="https://arhealthcare.com/sites/default/files/AHCA-20-7277%20covid%20twitter%20400x400.png" alt="" />
                    </div>
                    <div className="col-md-6 pt-3">
                        <h1>Complete Registration for Vaccination </h1>
                        <div className="d-flex">
                            <div>
                                <img src="https://uits.edu.bd/wp-content/uploads/2021/09/Screenshot_45-removebg-preview.png" alt="" />

                                <h2>Shurokkha App</h2>
                                <p className="ps-5 pe-5 justify-content-center"><small>Please register for COVID-19 vaccine if you have NID</small></p>
                                <button className="btn btn-outline-primary">Registration Now</button>
                            </div>
                            <div>
                                <img src="https://uits.edu.bd/wp-content/uploads/2021/09/ugc-removebg-preview.png" alt="" />

                                <h2>UGC Website</h2>
                                <p className="ps-5 pe-5"><small>Students who don't have NID are suggested to register below</small></p>
                                <button className="btn btn-outline-primary">Registration Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
    </div>
  );
};

export default Home;
