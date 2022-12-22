import React, { Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';

const AuthNavbar = () => {
  return (
    <>
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand>Front End Auth</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default AuthNavbar;