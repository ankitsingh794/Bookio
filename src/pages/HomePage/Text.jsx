import React from "react";
import "./Style/Text.css";

export const Text = () => {
  return (
    <div className="text">
      <div className="div">
        <div className="text-wrapper">Subheading</div>

        <p className="p">
          Body text for whatever you’d like to expand on the main point.
        </p>
      </div>

      <div className="div">
        <div className="text-wrapper">Subheading</div>

        <p className="p">
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes.
        </p>
      </div>

      <div className="div">
        <div className="text-wrapper-2">Subheading</div>

        <p className="text-wrapper-3">
          Body text for whatever you’d like to add more to the main point. It
          provides details, explanations, and context.
        </p>
      </div>
    </div>
  );
};
