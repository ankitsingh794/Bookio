import React from "react";
import "./Style/Frame.css"

export const Frame = () => {
    return(
        <div className="frame">
            <div className="card">
                <div className="image" />

                <div className="copy">
                    <div className="text-wrapper">Subheading</div>

                    <p className="div">
                        Body text for whatever you'd like to add more to the Subheading.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="image-2" />

                <div className="copy">
                    <div className="text-wrapper">Subheading</div>

                    <p className="div">
                        Body text for whatever you'd like to add more to the Subheading.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="image-3" />

                <div className="copy">
                    <div className="text-wrapper">Subheading</div>

                    <p className="div">
                        Body text for whatever you'd like to add more to the Subheading.
                    </p>
                </div>
            </div>            
        </div>
    );
};