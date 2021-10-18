import React from "react";

import "./Header.css";

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "./../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="">
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Health Care</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              Experts
            </Nav.Link>
            {user?.email ? (
              <Button variant="light" onClick={logOut}>Logout</Button>
            ) : (
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
