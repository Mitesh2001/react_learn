import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './auth/Auth';
import Login from './auth/login/Login';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './portal/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth/>}>
          <Route path='login' element = {<Login/>} />
        </Route>
        <Route path='/' element={<App/>}>
          <Route path='' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
