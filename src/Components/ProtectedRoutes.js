import React from 'react'
import {Navigate, Outlet } from 'react-router-dom';


export default function ProtectedRoutes(props) {


  const useAuth = () => { 
    const user = {loggedIn : true};
    return user && user.loggedIn;
}

    const isAuth = useAuth();
  return (

    isAuth ? <Outlet /> :  <Navigate to="/employeer" />
  )
}


 // isAuth ? <Outlet /> : <Navigate to="/employeer" />
