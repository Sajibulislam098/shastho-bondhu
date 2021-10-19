import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { useEffect } from "react";
import './Experts.css'
const Experts = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/medicalDepartment.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div>
        <div className=" container pb-5">
          <h1 className=" text-start border text-dark p-4">
          Our Featured <span className=" text-danger">Doctors</span>
          </h1>
          <div className="row ">
            {doctors.map((doctor) => (
              <div className="col-md-4 col-sm-6 mt-5 mb-5">
                <div className="carts d-flex flex-column   p-2 m-2 position-relative   align-items-center">
                  <img className=" img  pb-2" src={doctor.doctorImg} alt="" />
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    {" "}
                    <h4>{doctor.doctorName}</h4>
                    <p>
                     {doctor.doctorDegree}
                      
                    </p>
                    <p> {doctor.credit}</p>
                    <p>{doctor.spacialty}</p>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Experts;
