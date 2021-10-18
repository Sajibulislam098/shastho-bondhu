import { useEffect, useState } from "react";
import Service from "./../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("medicalDepartment.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services " className="container">
      <h2 className=" mt-5 d-flex justify-content-center mb-5 ">
        Find &nbsp;<span className="text-danger"> Specialities  </span > &nbsp; on Shastho
        Bondhu
      </h2>
      <div className=" row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
