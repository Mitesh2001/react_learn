import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import AuthNavbar from "./navbar/AuthNavbar";
import Login from './login/Login';

const Auth = () => {

  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (userToken) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkUserToken();
  });

  return (
    <>
      <AuthNavbar />
      <Login/>
      <AuthFooter />
    </>
  );
}; 

export default Auth;
