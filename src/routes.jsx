import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import other pages as needed


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
