import React from "react";

import "./Header.css";

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "./../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="">
      <Navbar className=" navbar"variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="https://i.ibb.co/6NJTwGT/1592038601529-removebg-preview.png" className="w-75" alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="navlink items me-3" as={HashLink} to="/home#home" >
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className=" items me-3 ">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts" className=" items me-3">
              Experts
            </Nav.Link>
            {user?.email ? (
              <Button variant="danger" onClick={logOut} className=" items me-3">Logout</Button>
            ) : (
              <Nav.Link as={HashLink} to="/login" className=" items me-3">
                Login
              </Nav.Link>
            )}
            <Navbar.Text className="  me-3">
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
