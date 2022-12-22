import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PortalNavbar = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/auth/login");
    }

  return (
    <>
      <Navbar bg="dark" className="navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand>Front End Auth | Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="btn btn-warning" onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PortalNavbar;