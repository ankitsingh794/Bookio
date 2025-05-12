import React from "react";
import "./CardsWrapper.css";

export const CardsWrapper = () => {
    return (
        <div className="cards-1">
            <div className="customer-quote">
                <p className="text-wrapper">"A terrific piece of praise"</p>
                <div className="avatar">
                    <img
                        className="img"
                        alt="Avatar"
                        src="https://ui-avatars.com/api/?name=Alice+Smith"
                    />
                    <div className="frame-1">
                        <div className="div">Alice Smith</div>
                        <div className="text-wrapper-2">Happy Customer</div>
                    </div>
                </div>
            </div>

            <div className="customer-quote-2">
                <p className="text-wrapper">"Fantastic service and support"</p>
                <div className="avatar">
                    <img
                        className="img"
                        alt="Avatar"
                        src="https://ui-avatars.com/api/?name=Bob+Jones"
                    />
                    <div className="frame-1">
                        <div className="div">Bob Jones</div>
                        <div className="text-wrapper-2">Frequent Buyer</div>
                    </div>
                </div>
            </div>

            <div className="customer-quote-3">
                <p className="text-wrapper">"The best platform ever!"</p>
                <div className="avatar">
                    <img
                        className="img"
                        alt="Avatar"
                        src="https://ui-avatars.com/api/?name=Charlie+Lee"
                    />
                    <div className="frame-1">
                        <div className="div">Charlie Lee</div>
                        <div className="text-wrapper-2">Event Organizer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
