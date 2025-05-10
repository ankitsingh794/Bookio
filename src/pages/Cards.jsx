import React from "react";
import "./Cards.css";

export const Cards = () => {
    return (
        <div className="cards">
            <div className="card">
                <div className="image" />

                <div className="copy">
                    <div className="text-wrapper">Subheading</div>

                    <p className="div">
                        Body text for whatever you’d like to add more to the Subheading.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="image-2" />

                <div className="copy-2">
                    <div className="text-wrapper-2">Subheading</div>

                    <p className="p">
                        Body text for whatever you’d like to add more to the Subheading.
                    </p>
                </div>
            </div>
        </div>
    );
};