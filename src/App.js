import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PortalFooter from './portal/footer/PortalFooter';
import PortalNavbar from './portal/navbar/PortalNavbar';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      navigate('/auth/login'); 
    } else {
      setIsLoggedIn(true)
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      <PortalNavbar />
        <Outlet/>
      <PortalFooter/>
    </>
  )
}

export default App;