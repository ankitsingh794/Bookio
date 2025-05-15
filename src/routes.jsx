import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Profilepage from './pages/UserProfilePage/userProfile';
import  LogHub  from './pages/LoginPage/LogHub';
// import other pages as needed


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profilepage/>} />
      <Route path='/loghub' element = {<LogHub/>}/>
    </Routes>
  );
};

export default AppRoutes;
