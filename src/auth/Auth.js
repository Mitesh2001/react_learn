import { Outlet } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import AuthNavbar from "./navbar/AuthNavbar";

const Auth = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <AuthFooter />
    </>
  );
}; 

export default Auth;
