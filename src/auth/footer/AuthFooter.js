import React from 'react';
import { Container } from 'react-bootstrap';

const AuthFooter = () => {
  return (
      <>
          <footer className='bg-light border-top py-3 fixed-bottom'>
              <Container>
                  &copy; Fron End auth App - 2022
              </Container>
          </footer>
    </>
  )
}

export default AuthFooter;