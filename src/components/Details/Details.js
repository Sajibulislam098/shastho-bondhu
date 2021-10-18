import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const { detailsId } = useParams();

  const [details, setDetails] = useState({});

  const [singleDetails, setSingleDetails] = useState([]);

  useEffect(() => {
    fetch("/medicalDepartment.json")
      .then((res) => res.json())
      .then((data) => {
        const matchData = data.find((service) => service.id === detailsId);
        setDetails(matchData);
        console.log(matchData);
      });
  }, [detailsId]);

  // useEffect(() => {
  //   const foundEmployee = details.find(
  //     (employee) => employee.id === detailsId
  //   );
  //   setSingleDetails(foundEmployee);
  // }, [details]);
  return (
    <div>
      <Header></Header>
     
      <Container className="pt-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={details?.img} />
            </Card>
          </Col>
          <Col md={8}>
            <Card style={{  }}>
              <Card.Body>
                <Card.Title > <h1>{details?.name}</h1> </Card.Title>
                <Card.Text className="mt-5">
                  <p> {details?.details}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
