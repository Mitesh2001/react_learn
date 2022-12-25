import React from 'react';
import { Container } from 'react-bootstrap';
import FileUpload from '../components/FileUpload';

const Home = () => {
  return (
    <>
      <Container className="py-5">
        <h3 className="fw-normal">Get Text From Image File</h3> 
        <FileUpload/>
      </Container>
    </>
  );
}

export default Home;