import React from "react";
import "./Style/Navigation.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { style } from "@mui/system";

export const Lnavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick1 = () => {
    if (location.pathname !== "/loghub/register") {
      navigate('/loghub/register');
    }
  };

  const handleClick2 = () => {
    if (location.pathname !== "/event") {
      navigate('/event');
    }
  };

  const handleClick3 = () => {
    if (location.pathname !== "/") {
      navigate('/');
    }
  };


  const goToTickets = () => {
    navigate("/profile", { state: { scrollTo: "tickets" } });
  };



  return (
    <div className="navigation">
      <div className="items">
        <div className="text-wrapper" onClick={handleClick2} style={{ cursor: 'pointer' }}> Explore Events</div>

        <div className="text-wrapper" onClick={goToTickets} style={{ cursor: 'pointer' }}>My Tickets</div>

        <div className="text-wrapper"> About</div>

        <div className="login-signup" onClick={handleClick1} style={{ cursor: 'pointer' }}>
          <div className="div">Login / Sign Up</div>
        </div>
      </div>

      <div className="text-wrapper-2" onClick={handleClick3} style={{ cursor: 'pointer' }}>Bookio</div>
    </div>
  );
};
