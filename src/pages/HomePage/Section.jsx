import React from "react";
import "./Style/Section.css";

export const Section = () => {
  return (
    <div className="section">
      <div className="buttons">
        <button className="button">
          <div className="text-wrapper">How It Works</div>
        </button>

        <button className="div-wrapper">
          <div className="div">Get Started Now</div>
        </button>
      </div>

      <div className="text-wrapper-2">Why Choose Us?</div>
    </div>
  );
};
