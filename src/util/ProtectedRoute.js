import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
      const userToken = localStorage.getItem("user-token");
      if (!userToken || userToken === 'undefined') {
        setIsLoggedIn(false);
        navigate("/auth");
      } 
    setIsLoggedIn(true);  
    };

    useEffect(() => {
      checkUserToken();
    }, [isLoggedIn]);

  return <>{isLoggedIn ? children : null}</>;
}

export default ProtectedRoute;