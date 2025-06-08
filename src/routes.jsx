import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Profilepage from './pages/UserProfilePage/userProfile';
import { RegisterForm,LoginForm,ForgotPassForm } from './pages/LoginPage/LogHub'
import Event from './pages/ListPage/Event';
import { OrderDetails ,Feedback,Setting,Support,Tasks,UserList} from './pages/AdminPage/Dashboard';
import ErrorPage from './components/Error404';
// import other pages as needed


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profilepage/>} />
      <Route path='/event' element={<Event/>}/>
      <Route path='/loghub/register' element = {<RegisterForm/>}/>
      <Route path='/loghub/login' element = {<LoginForm/>}/>
      <Route path='/loghub/forgot-password' element = {<ForgotPassForm/>}/>
      <Route path='/admin/orderdetails' element={<OrderDetails/>}/>
      <Route path='/admin/events' element={<Tasks/>}/>
      <Route path='/admin/support' element={<Support/>}/>
      <Route path='/admin/settings' element={<Setting/>}/>
      <Route path='/admin/feedbacks' element={<Feedback/>}/>
      <Route path='/admin/userlists' element={<UserList/>}/>



      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
