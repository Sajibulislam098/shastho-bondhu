import React from "react";

import "./Header.css";

import { Container, Nav, Navbar, Button } from "react-bootstrap";

import useAuth from "./../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="">
      <Navbar className=" navbar"variant="dark" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand  ><Link to ="/home"><img src="https://i.ibb.co/6NJTwGT/1592038601529-removebg-preview.png" className="w-75" alt="" /></Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="items me-3" as={HashLink} to="/home#home" >
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services" className=" items me-3 ">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/experts" className=" items me-3">
              Experts
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about" className=" items me-3">
              About us
            </Nav.Link>
            {user?.email ? (
              <Button variant="danger" onClick={logOut} className=" items me-3">Logout</Button>
            ) : (
              <Nav.Link as={HashLink} to="/login" className=" items me-3">
                Login
              </Nav.Link>
            )}
            
            <Navbar.Text className="  me-3">
              Signed in as: <a href="#login">{ user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
