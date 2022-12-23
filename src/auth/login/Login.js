import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const submitButton = useRef();
  const submitLoginForm = () => {
    submitButton.current.innerHTML = 'Please wait...';
    const data = {
      user_id: userId,
      otp : password
    };
    axios
      .post("http://findinsy.local/api/login", data)
      .then((res) => {
        const data = res.data;
        const token = data.user.token;
        if (!token) {
          alert("Unable to login. Please try again !");
          return;
        }
        localStorage.clear();
        localStorage.setItem('user-token', token);
        navigate('/');
      }).catch(() => {
         submitButton.current.innerHTML = "Login";
         alert("Oops! Some error occured.");
      });
  };
  return (
    <>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Login To Auth Demo</h2>
        <Row>
          <Col md={6}>
            <Form id="loginForm" onSubmit={submitLoginForm}>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-username"}>UserID</FormLabel>
                <input
                  type={"number"}
                  className="form-control"
                  id={"user-id"}
                  onChange={(e) => setUserId(e.target.value)}
                  value={userId}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-password"}>Password</FormLabel>
                <input
                  type={"password"}
                  className="form-control"
                  id={"login-password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </FormGroup>
              <Button
                ref={submitButton}
                type="button"
                className="btn-success mt-2"
                onClick={submitLoginForm}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;