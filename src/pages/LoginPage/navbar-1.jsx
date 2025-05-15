import React from "react";
import "./Style/navbar-1.css";

export const Navbar1 = () => {
  return (
    <div className="navbar-1">
      <div className="items">
        <div className="text-wrapper"> Explore Events</div>

        <div className="text-wrapper">My Tickets</div>

        <div className="text-wrapper"> About</div>

        <div className="login-signup">
          <div className="div">Login / Sign Up</div>
        </div>
      </div>

      <div className="text-wrapper-2">Bookio</div>
    </div>
  );
};
