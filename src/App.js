import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Company from './Components/Company';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
function App() {
const [loggedIn,setLoggedIn] =  useState()

  useEffect(()=>{
    setLoggedIn(JSON.parse(localStorage.getItem('data')))
  },[])
  console.log(loggedIn);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={(<PrivateRouter />)} >
            <Route path='/' element={( <Home /> )} />
            <Route path='/company' element={(<Company />)} />
          </Route>

          <Route path='/signup' element={( <Signup />)} />
          <Route path='/login' element={( <Login />)} />
        
          
          
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
