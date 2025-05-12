import React from "react";
import "./NavigationFooter.css";

export const NavigationFooter = () => {
    return (
        <div className="footer">
            <div className="navigation-footer">

                <div className="items-4">
                    <div className="text-wrapper-2">Bookio</div>

                    <div className="social-icons">
                        <div className="button-icons">
                            <div className="icon">
                                <img className="img" alt="Icon" src="https://via.placeholder.com/24" />
                            </div>
                        </div>

                        <div className="button-icons">
                            <div className="icon">
                                <img className="icon-2" alt="Icon" src="https://via.placeholder.com/24" />
                            </div>
                        </div>

                        <div className="button-icons">
                            <div className="icon">
                                <img className="icon-3" alt="Icon" src="https://via.placeholder.com/24" />
                            </div>
                        </div>

                        <div className="button-icons">
                            <div className="icon">
                                <img className="img" alt="Icon" src="https://via.placeholder.com/24" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="items">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>

                <div className="items-2">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>

                <div className="items-3">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>


                <img className="divider" alt="Divider" src="https://via.placeholder.com/100x2" />
            </div>
        </div>
    );
};
