import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Profilepage from './pages/UserProfilePage/userProfile'
// import other pages as needed


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profilepage/>} />
    </Routes>
  );
};

export default AppRoutes;
