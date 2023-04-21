import React, {useState} from 'react'
import {Navigate, Outlet } from 'react-router-dom';


export default function ProtectedRoutes(props) {


  const [login, setlogin] = useState(false);
  const useAuth = () => { 
    const user = {loggedIn : login};
    return user && user.loggedIn;
}

    const isAuth = useAuth();
  return (

    isAuth ? <Outlet /> :  <Navigate to="/employeer" replace={setlogin(true)} />
  )
}


 // isAuth ? <Outlet /> : <Navigate to="/employeer" />
