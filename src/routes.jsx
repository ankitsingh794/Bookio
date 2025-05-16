import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Profilepage from './pages/UserProfilePage/userProfile';
import  LogHub  from './pages/LoginPage/LogHub';
import Event from './pages/ListPage/Event';
import AdminDashboard from './pages/AdmiPage/Dashboard';
// import other pages as needed


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profilepage/>} />
      <Route path='/event' element={<Event/>}/>
      <Route path='/loghub' element = {<LogHub/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
  );
};

export default AppRoutes;
