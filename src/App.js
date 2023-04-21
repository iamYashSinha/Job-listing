import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Employeer from "./Components/Employeer";
import Employee from "./Components/Employee";
import Nav from "./Components/Nav";
import Signin from "./Components/Signin";
import ProtectedRoutes from "./Components/ProtectedRoutes";




export default () => {
  return(
    

  <Router>
      
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route element={<ProtectedRoutes />}>
        <Route path="/employeer" element={<Employeer />}/>
        <Route path="/employee" element={<Employee />}/>
        </Route>
        
        <Route path="/signin" element={<Signin />} />
      </Routes>
     
    </Router> 
  ) 
};
